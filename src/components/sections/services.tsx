import { Reveal } from "@/components/ui/reveal";
import {
  TrendingUpIcon,
  TargetIcon,
  BarChart3Icon,
  MailIcon,
} from "lucide-react";

const services = [
  {
    icon: TrendingUpIcon,
    title: "Paid Media",
    desc: "Meta, Google, and LinkedIn campaigns built around payback period, not impressions.",
  },
  {
    icon: TargetIcon,
    title: "Conversion Rate Optimization",
    desc: "Landing pages and funnels tested until every click has somewhere better to go.",
  },
  {
    icon: BarChart3Icon,
    title: "Analytics & Attribution",
    desc: "Dashboards that show exactly which channel earned the sale — no guesswork.",
  },
  {
    icon: MailIcon,
    title: "Lifecycle & Email",
    desc: "Retention flows and campaigns that turn one-time buyers into repeat revenue.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Full-funnel growth, handled.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-card p-8">
              <s.icon className="size-7 text-cobalt" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-xl font-bold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
