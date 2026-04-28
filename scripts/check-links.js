#!/usr/bin/env node
/**
 * check-links.js — NicheFinders AI Website Link Checker
 * Run: node scripts/check-links.js
 * Uses only Node.js built-ins (fs, path) — no npm required.
 */

const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src');
const APP_DIR = path.join(SRC_DIR, 'app');
const BLOG_DIR = path.join(SRC_DIR, 'content', 'blog');

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Recursively collect files matching an extension list */
function collectFiles(dir, exts, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules and .next
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      collectFiles(full, exts, results);
    } else if (exts.some(ext => entry.name.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Convert a page.tsx file path into a URL route string.
 * Returns { route, isDynamic } where isDynamic means it contains [param] segments.
 */
function pagePathToRoute(filePath) {
  // Strip the APP_DIR prefix and /page.tsx suffix
  const rel = path.relative(APP_DIR, filePath); // e.g. "about/page.tsx"
  const withoutFile = rel.replace(/[/\\]page\.tsx$/, ''); // e.g. "about"
  if (withoutFile === 'page.tsx' || withoutFile === '') return { route: '/', isDynamic: false };

  const segments = withoutFile.split(path.sep);
  const isDynamic = segments.some(s => s.startsWith('[') && s.endsWith(']'));

  // Build the URL prefix up to (but not including) the first dynamic segment
  const staticSegments = [];
  for (const seg of segments) {
    if (seg.startsWith('[') && seg.endsWith(']')) break;
    staticSegments.push(seg);
  }

  const route = '/' + segments.join('/');
  const staticPrefix = '/' + staticSegments.join('/');

  return { route, isDynamic, staticPrefix };
}

/** Build the set of valid routes from all page.tsx files */
function buildValidRoutes() {
  const pageFiles = collectFiles(APP_DIR, ['.tsx', '.ts']);
  // Only keep actual page.tsx files (not layout.tsx, client components, etc.)
  const pages = pageFiles.filter(f => f.endsWith(`${path.sep}page.tsx`) || f.endsWith('/page.tsx'));

  const staticRoutes = new Set();
  const dynamicPrefixes = []; // e.g. "/case-studies"

  for (const p of pages) {
    const { route, isDynamic, staticPrefix } = pagePathToRoute(p);
    if (isDynamic) {
      if (staticPrefix && staticPrefix !== '/') {
        dynamicPrefixes.push(staticPrefix);
      } else {
        dynamicPrefixes.push('/');
      }
    } else {
      staticRoutes.add(route);
    }
  }

  return { staticRoutes, dynamicPrefixes };
}

// Static assets and special Next.js routes that exist but have no page.tsx
const ALWAYS_VALID = new Set([
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/sitemap.xml',
  '/robots.txt',
  '/privacy-policy',
  '/terms-of-service',
  '/404',
  '/500',
]);

/** Check whether a given href is covered by the valid route set */
function isValidRoute(href, staticRoutes, dynamicPrefixes) {
  // Strip query strings and hash fragments
  const clean = href.split('?')[0].split('#')[0];
  if (!clean || clean === '/') return staticRoutes.has('/') || staticRoutes.has('');

  // Known-valid static assets and system routes
  if (ALWAYS_VALID.has(clean)) return true;

  if (staticRoutes.has(clean)) return true;

  // Check dynamic prefixes — e.g. /case-studies/all-south matches prefix /case-studies
  for (const prefix of dynamicPrefixes) {
    if (clean.startsWith(prefix + '/') || clean === prefix) return true;
  }

  return false;
}

// ─── Link Extraction ──────────────────────────────────────────────────────────

/**
 * Extract links from TSX/TS/MDX source text.
 * Returns array of { href, line }
 */
function extractLinks(source) {
  const links = [];
  const lines = source.split('\n');

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;

    // JSX href="..." or href={`...`} or href={'...'}
    const hrefMatches = [
      ...line.matchAll(/href=["'`]([^"'`\s]+)["'`]/g),
      ...line.matchAll(/href=\{["'`]([^"'`\s]+)["'`]\}/g),
    ];
    for (const m of hrefMatches) {
      links.push({ href: m[1], line: lineNum });
    }

    // Markdown links [text](/path)
    const mdMatches = [...line.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g)];
    for (const m of mdMatches) {
      links.push({ href: m[2], line: lineNum });
    }

    // Next.js <Link href="..."> — same as href above, already caught
    // to= (used by some router libs) — catch for thoroughness
    const toMatches = [...line.matchAll(/\bto=["'`]([^"'`\s]+)["'`]/g)];
    for (const m of toMatches) {
      links.push({ href: m[1], line: lineNum });
    }
  });

  return links;
}

/** Classify a single link href */
function classifyHref(href) {
  if (!href) return 'skip';
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) return 'external';
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return 'skip';
  // Template literals with ${...} — these are dynamic and always valid at runtime
  if (href.includes('${')) return 'dynamic';
  if (href.startsWith('/')) return 'internal';
  // Relative paths — skip for now (would need context to resolve)
  return 'skip';
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  console.log('\n🔍  NicheFinders AI — Link Checker\n' + '─'.repeat(50));

  // 1. Build valid route set
  const { staticRoutes, dynamicPrefixes } = buildValidRoutes();
  console.log(`\n📂  Valid static routes detected: ${staticRoutes.size}`);
  for (const r of [...staticRoutes].sort()) console.log(`    ${r}`);
  console.log(`\n🔀  Dynamic route prefixes: ${dynamicPrefixes.length}`);
  for (const p of dynamicPrefixes.sort()) console.log(`    ${p}/*`);

  // 2. Collect all source files
  const srcFiles = collectFiles(SRC_DIR, ['.tsx', '.ts', '.mdx']);
  console.log(`\n📄  Files scanned: ${srcFiles.length}\n`);

  const broken = [];
  const external = [];
  let validCount = 0;

  for (const filePath of srcFiles) {
    const source = fs.readFileSync(filePath, 'utf8');
    const relFile = path.relative(ROOT, filePath);
    const links = extractLinks(source);

    for (const { href, line } of links) {
      const type = classifyHref(href);

      if (type === 'external') {
        external.push({ file: relFile, line, href });
      } else if (type === 'dynamic') {
        // Template literal hrefs — runtime-resolved, always valid
        validCount++;
      } else if (type === 'internal') {
        if (isValidRoute(href, staticRoutes, dynamicPrefixes)) {
          validCount++;
        } else {
          broken.push({ file: relFile, line, href });
        }
      }
      // 'skip' → ignore
    }
  }

  // ─── Output Results ───────────────────────────────────────────────────────

  console.log('─'.repeat(50));
  console.log(`✅  Valid internal links:  ${validCount}`);
  console.log(`❌  Broken internal links: ${broken.length}`);
  console.log(`⚠️   External links found:  ${external.length}`);
  console.log('─'.repeat(50));

  if (broken.length > 0) {
    console.log('\n❌  BROKEN INTERNAL LINKS (fix before deploy):\n');
    for (const { file, line, href } of broken) {
      console.log(`  ${file}:${line} → ${href}`);
    }
  } else {
    console.log('\n✅  No broken internal links found. Safe to deploy.\n');
  }

  if (external.length > 0) {
    console.log('\n⚠️   EXTERNAL LINKS (spot-check manually):\n');
    // Deduplicate for readability
    const seen = new Set();
    for (const { href } of external) {
      if (!seen.has(href)) {
        seen.add(href);
        console.log(`  ${href}`);
      }
    }
    console.log(`\n  (Showing unique URLs. Total occurrences: ${external.length})`);
  }

  console.log('\n' + '─'.repeat(50) + '\n');

  // Exit with error code if broken links found (useful for CI)
  if (broken.length > 0) process.exit(1);
}

main();
