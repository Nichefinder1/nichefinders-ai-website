import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  coverImage?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
}

export function getAllPosts(): PostMeta[] {
  return getPostFiles()
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
      const { data, content } = matter(raw);
      const rt = readingTime(content);
      return {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        author: data.author ?? 'NicheFinders AI',
        category: data.category ?? 'AI Automation',
        tags: data.tags ?? [],
        readingTime: rt.text,
        featured: data.featured ?? false,
        coverImage: data.coverImage ?? undefined,
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const rt = readingTime(content);
  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    author: data.author ?? 'NicheFinders AI',
    category: data.category ?? 'AI Automation',
    tags: data.tags ?? [],
    readingTime: rt.text,
    featured: data.featured ?? false,
    coverImage: data.coverImage ?? undefined,
    content,
  };
}

export function getAllSlugs(): string[] {
  return getPostFiles().map((f) => f.replace(/\.mdx$/, ''));
}
