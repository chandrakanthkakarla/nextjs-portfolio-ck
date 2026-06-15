import ProfileCard from "../components/ProfileCard";
import GitHubProjectCard from "../components/GitHubProjectCard";
import { githubProjects } from "../lib/github-projects";
import Reveal from "../components/Reveal";

export default function AutomationPage() {
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
                    Open Source
                  </p>
                  <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
                      Automation
                    </span>
                    <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-zinc-500/50">
                      Projects
                    </span>
                  </h2>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Open-source network automation projects built with Python,
                  Ansible, and Terraform. Production-tested solutions for
                  network operations, monitoring, and compliance.
                </p>
              </section>
            </Reveal>

            {/* Projects Grid */}
            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {githubProjects.map((project) => (
                <GitHubProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  technologies={project.technologies}
                  github={project.github}
                  status={project.status}
                  highlights={project.highlights}
                />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 p-8 text-center dark:from-orange-500/10 dark:to-orange-500/5">
              <h3 className="mb-2 text-2xl font-bold text-slate-950 dark:text-white">
                More Projects on GitHub
              </h3>
              <p className="mb-6 text-slate-600 dark:text-slate-400">
                Explore additional repositories and contributions
              </p>
              <a
                href="https://github.com/chandrakanthkakarla"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 transition-colors"
              >
                View GitHub Profile
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
