import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    name: "Elena C.",
    role: "VP Marketing, Northwind",
    quote:
      "Momentum rebuilt our entire paid strategy in a month. Pipeline hasn't looked this healthy in two years.",
  },
  {
    name: "Marcus W.",
    role: "Founder, Loom & Co",
    quote:
      "First agency that talked about payback period on day one instead of impressions. Refreshing.",
  },
  {
    name: "Priya N.",
    role: "Growth Lead, Vertex",
    quote:
      "They cut our CAC almost in half while keeping volume flat. That never happens.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">
            Client Feedback
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Don&apos;t take our word for it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className="rounded-lg border border-border bg-card p-8"
            >
              <p className="font-display text-3xl leading-none text-cobalt">
                &ldquo;
              </p>
              <p className="mt-3 text-base leading-relaxed">{t.quote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-graphite">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
