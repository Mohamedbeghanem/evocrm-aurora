import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/demo-data";
import { ProductFrame } from "@/components/mocks/product-frame";
import { useDemo } from "./demo-context";

export function Hero() {
  const { openDemo } = useDemo();
  return (
    <section className="relative overflow-hidden">
      <div className="aurora-hero pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 md:px-6 md:pt-24 md:pb-8">
        <p className="text-center text-xs font-medium tracking-wide text-mute">Evotechly · EvoCRM</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-center font-display text-5xl leading-[1.05] tracking-[-1.6px] md:text-7xl">
          Close more deals <span className="text-voltage">per hour.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-mute md:text-lg">
          The sales OS for Algeria-first teams. Official WhatsApp Cloud, Meta ads, DZD pipelines, and a desk that lives on the record — without a per-seat tax.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={() => openDemo("demo")}>
            Book a demo
            <ArrowRight className="size-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => openDemo("talk")}>
            Talk to an operator
          </Button>
        </div>
        <p className="mt-4 text-center text-xs font-medium text-mute">
          5–20 seat teams · Africa/Algiers · No unofficial WhatsApp
        </p>
        <div className="mt-12 md:mt-16">
          <ProductFrame />
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-hairline pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-3xl tracking-tight md:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-xs font-medium text-mute">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
