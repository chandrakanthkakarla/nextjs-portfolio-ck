import ProfileCard from "../components/ProfileCard";
import SkillsMatrix from "../components/SkillsMatrix";
import Reveal from "../components/Reveal";

export default function ToolsPage() {
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
                    Expertise
                  </p>
                  <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
                      Technical
                    </span>
                    <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-zinc-500/50">
                      Skills
                    </span>
                  </h2>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Comprehensive technical skills across routing, switching,
                  security, automation, monitoring, and cloud platforms. Each
                  skill backed by real-world production experience.
                </p>
              </section>
            </Reveal>

            {/* Skills Matrix */}
            <div className="mt-16">
              <SkillsMatrix />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
