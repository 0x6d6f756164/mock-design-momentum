import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/case-studies";

export function Work() {
  return (
    <section id="work" className="relative bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">
            Selected Work
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Results, not retainers.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.client}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-cobalt/0 transition-colors duration-300 group-hover:bg-cobalt/10"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-graphite">
                    {c.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {c.client}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2 border-t border-border pt-4">
                    <span className="font-display text-3xl font-bold text-cobalt">
                      {c.result}
                    </span>
                    <span className="text-sm text-graphite">
                      {c.resultLabel}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-ink"
        style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }}
      />
    </section>
  );
}
