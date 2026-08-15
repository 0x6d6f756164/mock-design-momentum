import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">
            Who We Are
          </p>
          <h2 className="mt-5 font-display text-3xl font-medium leading-snug tracking-tight md:text-4xl">
            A small team of media buyers, analysts, and designers who got
            tired of agencies optimizing for their own retainer instead of
            your revenue. So we built the one we&apos;d hire ourselves.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
