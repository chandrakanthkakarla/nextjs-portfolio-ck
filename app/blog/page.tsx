import ProfileCard from "../components/ProfileCard";
import BlogArticleCard from "../components/BlogArticleCard";
import { blogArticles } from "../lib/blog-data";
import Reveal from "../components/Reveal";

export default function BlogPage() {
  return (
    <main className="pt-14">
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ProfileCard />
          </aside>

          <div className="pb-24">
            {/* Header */}
            <Reveal amount={0.3} y={28} margin="0px 0px -35px 0px">
              <section className="space-y-8 px-10">
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                    Insights
                  </p>
                  <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
                      Technical
                    </span>
                    <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-zinc-500/50">
                      Articles
                    </span>
                  </h2>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Deep dives into networking concepts, practical solutions to
                  real problems, and lessons learned from production
                  environments.
                </p>
              </section>
            </Reveal>

            {/* Blog Articles */}
            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {blogArticles.map((article) => (
                <BlogArticleCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  readTime={article.readTime}
                  tags={article.tags}
                  slug={article.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
