import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { CALENDAR_LINK } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Insights | NicheFinders AI Agency',
  description: 'Actionable AI automation insights for Florida businesses. Strategies, case studies, and frameworks from the NicheFinders team.',
};

const categoryColors: Record<string, string> = {
  'AI Strategy': '#7aafd4',
  'Home Services': '#10B981',
  'Automotive': '#F59E0B',
  'Nonprofits': '#A855F7',
  'Professional Services': '#EC4899',
  'AI Automation': '#CC5500',
};

function getCategoryColor(category: string): string {
  return categoryColors[category] ?? '#7aafd4';
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function AIInsightsPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20"
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
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">
            AI Insights
          </p>
          <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
            AI Automation<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}
            >
              Insights & Strategies
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Actionable frameworks, case studies, and strategies for Florida businesses ready to implement AI.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section
          className="py-20 px-6 border-t border-white/10"
          style={{ background: '#001228' }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-10">Featured</p>
            <Link href={`/resources/ai-insights/${featured.slug}`} className="group block">
              <div
                className="p-8 md:p-12 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300"
                style={{ background: 'rgba(0,40,85,0.4)' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          background: `${getCategoryColor(featured.category)}18`,
                          color: getCategoryColor(featured.category),
                          border: `1px solid ${getCategoryColor(featured.category)}40`,
                        }}
                      >
                        {featured.category}
                      </span>
                      <span className="text-xs text-white/40">{featured.readingTime}</span>
                    </div>
                    <h2 className="font-header font-bold text-2xl md:text-3xl text-white group-hover:text-[#7aafd4] transition-colors leading-tight mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-white/60 leading-relaxed mb-6">{featured.description}</p>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span>{featured.author}</span>
                      <span>·</span>
                      <span>{formatDate(featured.date)}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All posts grid */}
      {rest.length > 0 && (
        <section
          className="py-20 px-6 border-t border-white/10"
          style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-10">All Posts</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/resources/ai-insights/${post.slug}`} className="group block h-full">
                  <div
                    className="h-full p-6 rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    style={{ background: 'rgba(0,40,85,0.3)' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: `${getCategoryColor(post.category)}18`,
                          color: getCategoryColor(post.category),
                          border: `1px solid ${getCategoryColor(post.category)}40`,
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-white/40">{post.readingTime}</span>
                    </div>
                    <h3 className="font-header font-bold text-lg text-white group-hover:text-[#7aafd4] transition-colors leading-snug mb-3 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">{post.description}</p>
                    <div className="flex items-center gap-3 text-xs text-white/35 pt-4 border-t border-white/10">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {posts.length === 0 && (
        <section
          className="py-32 px-6 border-t border-white/10 text-center"
          style={{ background: '#001228' }}
        >
          <p className="text-white/40 text-lg">No posts yet. Check back soon.</p>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #002855 0%, #001A3A 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Get Started</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Put This<br />Into Practice?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call. We will map your workflow, identify automation opportunities, and show you the exact ROI.
          </p>
          <Link
            href={CALENDAR_LINK}
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[260px]"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
