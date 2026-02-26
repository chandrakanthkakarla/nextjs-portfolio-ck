import ProjectRow from "./ProjectRow";
import Reveal from "./Reveal";

type ProjectsSectionProps = { animated?: boolean };

type Project = {
  name: string;
  description: string;
  image: string;
  github: string | false;
  view: string | false;
  status: boolean;
  date: string;
};

const projects: Project[] = [
  {
    name: "NOC Operations",
    description:
      "Network Operations Center (NOC) Operations involves monitoring, managing, and maintaining an organization's network and infrastructure to ensure maximum uptime, performance, and reliability.",
    image: "/img/noc.jpg",
    github: false,
    view: false,
    status: true,
    date: "2026-02-24",
  },
];

export default function ProjectsSection({
  animated = false,
}: ProjectsSectionProps) {
  const Content = (
    <section className="space-y-12">
      {/* Heading */}
      <div className="px-10">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Portfolio
        </p>
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
            RECENT
          </span>
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-neutral-500/50">
            PROJECTS
          </span>
        </h2>
      </div>

      {/* List */}
      <div className="space-y-4 px-10">
        {projects.map((project) => (
          <ProjectRow
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            date={project.date}
            github={project.github}
            view={project.view}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );

  if (animated) {
    return (
      <Reveal amount={0.1} margin="0px 0px -10px 0px">
        {Content}
      </Reveal>
    );
  }

  return Content;
}
