import { Check } from "lucide-react";
import { ProductFrame, type ProductTab } from "@/components/mocks/product-frame";
import { modules, showcase } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

const tourTabs: Record<string, ProductTab> = {
  crm: "pipeline",
  desk: "desk",
};

export function ProductTour() {
  return (
    <section id="product" className="bg-canvas-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-wide text-brand">Product</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
          Four rooms. One contact.
        </h2>
        <p className="mt-4 max-w-xl text-mute">
          CRM, Desk, Outbound, Ads. Toggle the rooms as you grow — the person never forks into four databases.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {showcase.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-xl bg-night p-2 shadow-[var(--shadow-lift)]">
              <div className="h-56 overflow-hidden rounded-lg bg-canvas md:h-64">
                <div className="origin-top-left scale-[0.72]">
                  <div className="h-[28rem] w-[140%]">
                    <ProductFrame lockedTab={item.id as ProductTab} showTabs={false} />
                  </div>
                </div>
              </div>
              <div className="px-3 pt-4 pb-3">
                <h3 className="font-display text-2xl text-inverse">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-inverse-mute">{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="modules" className="mt-20 space-y-20">
          {modules
            .filter((m) => m.id === "crm" || m.id === "desk")
            .map((mod, i) => (
              <div
                key={mod.id}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
                  i % 2 === 1 && "lg:[&>div:first-child]:order-2",
                )}
              >
                <div>
                  <p className="text-xs font-medium tracking-wide text-brand">{mod.kicker}</p>
                  <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">{mod.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">{mod.body}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {mod.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-voltage" strokeWidth={2} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ProductFrame lockedTab={tourTabs[mod.id]} showTabs={false} />
              </div>
            ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {modules
            .filter((m) => m.id === "outbound" || m.id === "ads")
            .map((mod) => (
              <article key={mod.id} className="rounded-xl bg-canvas p-6 shadow-[var(--shadow-border)] md:p-8">
                <p className="text-xs font-medium tracking-wide text-brand">{mod.kicker}</p>
                <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">{mod.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{mod.body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {mod.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-voltage" strokeWidth={2} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
