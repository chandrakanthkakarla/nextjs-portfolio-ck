import ProjectRow from "./ProjectRow";
import Reveal from "./Reveal";

type ProjectsSectionProps = {
  animated?: boolean;
};
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
    "Network Operations Center (NOC) Operations involves monitoring, managing, and maintaining an organization’s network and infrastructure to ensure maximum uptime, performance, and reliability.",
  image: "/img/noc.jpg",
  github: false,
  view: false,
  status: true,
  date: "2026-02-24"
}
];


export default function ProjectsSection({ animated = false }: ProjectsSectionProps) {
  const Content = (
    <section className="space-y-16">
      {/* Heading */}
      <div className="px-10">
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
            RECENT
          </span>
          <span className="block text-[clamp(3.5rem,7vw,7rem)] text-neutral-500/50">
            PROJECTS
          </span>
        </h2>
      </div>

      {/* Project list */}
      <div className="space-y-12 px-10">
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
    <Reveal amount={0.1} margin="0px 0px -10% 0px">
        {Content}
      </Reveal>
    );
  }

  return Content;
}
