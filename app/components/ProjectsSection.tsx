import ProjectRow from "./ProjectRow";
import Reveal from "./Reveal";

type ProjectsSectionProps = {
  animated?: boolean;
};

export default function ProjectsSection({ animated = false }: ProjectsSectionProps) {
  const Content = (
    <section className="space-y-16">
      {/* Heading */}
      <div className="px-10">
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
            RECENT
          </span>
          <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
            PROJECTS
          </span>
        </h2>
      </div>

      {/* Project list */}
      <div className="space-y-10 px-10">
        <ProjectRow
          title="Revo"
          subtitle="Free Framer Template"
          image="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=400&q=80"
        />
        <ProjectRow
          title="NajmAI"
          subtitle="SaaS Framer Template"
          image="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=400&q=80"
        />
        <ProjectRow
          title="Orbit UI"
          subtitle="Modern UI Kit"
          image="https://images.unsplash.com/photo-1581091870627-3d5c1f5d09f1?auto=format&fit=crop&w=400&q=80"
        />
      </div>
    </section>
  );

  // ✅ Animate only when requested (Home)
  if (animated) {
    return (
      <Reveal amount={0.3} y={28}>
        {Content}
      </Reveal>
    );
  }

  // ✅ Static version (Projects page)
  return Content;
}
