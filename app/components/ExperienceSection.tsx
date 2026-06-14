import ExperienceRow from "./ExperienceRow";
import Reveal from "./Reveal";

type ExperienceSectionProps = { animated?: boolean };

function getExperienceYears(joinDate: string) {
  const join = new Date(joinDate);
  const now = new Date();
  let years = now.getFullYear() - join.getFullYear();
  if (
    now.getMonth() < join.getMonth() ||
    (now.getMonth() === join.getMonth() && now.getDate() < join.getDate())
  ) {
    years -= 1;
  }
  return years;
}

export default function ExperienceSection({
  animated = false,
}: ExperienceSectionProps) {
  const experienceYears = getExperienceYears("2023-08-31");
  const Content = (
    <section className="space-y-12">
      {/* Heading */}
      <div className="px-10">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Career
        </p>
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-black dark:text-white">
            {experienceYears} YEARS
          </span>
          <span className="block text-[clamp(3.2rem,6.5vw,6.5rem)] text-zinc-500/50">
            EXPERIENCE
          </span>
        </h2>
      </div>

      {/* Timeline list */}
      <div className="space-y-4 px-10">
        <ExperienceRow
          title="Cognizant Technology Solutions"
          role="Network Engineer"
          description="Network Infrastructure Engineer with hands-on experience as a Network Engineer L2. With a strong foundation in networking, incident management, and IT support. Experienced in monitoring, troubleshooting, SLA management, and cross-team coordination. Certified in Google IT Support, Networking, and Zero Trust ZTCA, with a focused goal of advancing toward CCNA/CCNP-level expertise and deeper cybersecurity specialization."
          period="August 2023 – Present"
        />
      </div>
    </section>
  );

  if (animated) {
    return (
      <Reveal amount={0.3} y={28} margin="0px 0px -35px 0px">
        {Content}
      </Reveal>
    );
  }

  return Content;
}
