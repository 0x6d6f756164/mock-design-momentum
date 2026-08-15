import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const clients = ["Northwind", "Vertex", "Loom & Co", "Basecamp", "Fjord", "Anchor"];

export function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">
          Growth Marketing Agency
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          We turn ad spend into{" "}
          <span className="text-cobalt">revenue</span>, not vanity metrics.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite">
          Momentum is a performance marketing team for B2B and DTC brands
          ready to scale past their first million. No fluff decks, just
          pipelines and profit.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-md bg-ink px-8 text-base font-semibold text-paper hover:bg-ink/85"
          >
            <a href="#contact" className="inline-flex items-center gap-2">
              Start a Project
              <ArrowRightIcon className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-base font-semibold text-ink hover:bg-ink/5"
          >
            <a href="#work">See Our Work</a>
          </Button>
        </div>
      </div>

      <div className="border-y border-border bg-ink py-8">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span
                key={c}
                className="font-display text-lg font-semibold text-paper/60"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
