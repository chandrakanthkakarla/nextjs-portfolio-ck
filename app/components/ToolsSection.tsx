import Reveal from "./Reveal";
import ToolsRow from "./ToolsRow";

type ToolsSectionProps = { animated?: boolean };

const tools = [
  { name: "SolarWinds",          subtitle: "Network Monitoring",   emoji: "📡" },
  { name: "Cisco Packet Tracer", subtitle: "Network Simulation",   emoji: "🔀" },
  { name: "ServiceNow",          subtitle: "ITSM & Ticketing",     emoji: "🎫" },
  { name: "AWS / Azure",         subtitle: "Cloud Infrastructure", emoji: "☁️" },
  { name: "Python / Bash",       subtitle: "Network Automation",   emoji: "🐍" },
  { name: "Wireshark",           subtitle: "Packet Analysis",      emoji: "🦈" },
];

export default function ToolsSection({ animated = false }: ToolsSectionProps) {
  const Content = (
    <section className="space-y-12">

      {/* Heading */}
      <div className="px-10">
        <p
          className="mb-1 text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgb(var(--accent, 249 115 22))" }}
        >
          Stack
        </p>
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
            TOOLS AND
          </span>
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-neutral-500/50">
            TECHNOLOGY
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolsRow
              key={tool.name}
              name={tool.name}
              subtitle={tool.subtitle}
              emoji={tool.emoji}
            />
          ))}
        </div>
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
