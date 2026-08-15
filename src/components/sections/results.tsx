import { StatCounter } from "@/components/ui/stat-counter";

const stats = [
  { value: 4.2, suffix: "x", label: "Average ROAS across active accounts" },
  { value: 128, prefix: "$", suffix: "M", label: "Ad spend managed in 2025" },
  { value: 96, suffix: "%", label: "Client retention rate" },
  { value: 40, suffix: "+", label: "Brands scaled past 7 figures" },
];

export function Results() {
  return (
    <section className="bg-ink py-20 text-paper md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
