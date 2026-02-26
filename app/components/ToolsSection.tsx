import Reveal from "./Reveal";
import ToolsRow from "./ToolsRow";

type ToolsSectionProps = { animated?: boolean };

export default function ToolsSection({ animated = false }: ToolsSectionProps) {
  const Content = (
    <section className="space-y-12">
      {/* Heading */}
      <div className="px-10">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Stack
        </p>
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
            TOOLS AND
          </span>
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-zinc-500/50">
            TECHNOLOGY
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ToolsRow name="AWS"         subtitle="Cloud Platform"   iconSrc="/AWS.svg" />
          <ToolsRow name="OpenAI"      subtitle="AI Platform"      iconSrc="/tools/openai.svg" />
          <ToolsRow name="Ubuntu"      subtitle="Linux Server OS"  iconSrc="/tools/ubuntu.svg" />
          <ToolsRow name="SolarWinds"  subtitle="Monitoring Tool"  iconSrc="/solarwinds.svg" />
        </div>
      </div>
    </section>
  );

  if (animated) {
    return (
      <Reveal amount={0.15} margin="0px 0px -35px 0px">
        {Content}
      </Reveal>
    );
  }

  return Content;
}
