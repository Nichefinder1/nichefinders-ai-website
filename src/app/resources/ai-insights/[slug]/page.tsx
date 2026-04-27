import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs } from '@/lib/mdx';
import { CALENDAR_LINK } from '@/lib/constants';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | AI Insights`,
    description: post.description,
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mt-10 mb-5" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-header font-bold text-2xl md:text-3xl text-white leading-tight mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-header font-bold text-xl text-white leading-snug mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-white/70 leading-relaxed mb-5 text-lg" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2 mb-5 pl-6 list-disc marker:text-orange-cta" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-2 mb-5 pl-6 list-decimal marker:text-orange-cta" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-white/70 leading-relaxed text-lg" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-white" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-orange-cta pl-6 my-6 italic text-white/60"
      {...props}
    />
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-white/10 text-[#7aafd4] px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 50%, #001A3A 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <Link
            href="/resources/ai-insights"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-semibold transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            AI Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-orange-cta border border-orange-cta/30 bg-orange-cta/10">
              {post.category}
            </span>
            <span className="text-xs text-white/40">{post.readingTime}</span>
          </div>

          <h1 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-8">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-white/40 pb-8 border-b border-white/10">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-16 px-6 border-t border-white/10"
        style={{ background: '#001228' }}
      >
        <div className="max-w-3xl mx-auto prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </section>

      {/* Tags */}
      {post.tags.length > 0 && (
        <section
          className="py-10 px-6 border-t border-white/10"
          style={{ background: '#001228' }}
        >
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #002855 0%, #001A3A 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Get Started</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            Ready to Put This<br />Into Practice?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call. We will map your workflow and show you exactly where AI drives the most ROI for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CALENDAR_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[240px]"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/resources/ai-insights"
              className="inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-base transition-all duration-200 min-w-[240px]"
            >
              Read More Posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
