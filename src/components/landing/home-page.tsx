import { ArrowRight, Check, Minus } from "lucide-react";
import { Wordmark } from "@/components/brand/mark";
import { Button } from "@/components/ui/button";
import { comparisonRows, faqs, plans, quotes } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import { DemoProvider, useDemo } from "./demo-context";
import { Hero } from "./hero";
import { ProductTour } from "./product-tour";
import { SiteNav } from "./site-nav";

export function HomePage() {
  return (
    <DemoProvider>
      <div id="top" className="min-h-screen bg-cream">
        <SiteNav />
        <main>
          <Hero />
          <LogoBar />
          <Problem />
          <ProductTour />
          <Compare />
          <Proof />
          <Pricing />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </DemoProvider>
  );
}

function LogoBar() {
  const items = ["WhatsApp Cloud", "Meta ads", "Owned SMTP", "DZD", "Wilaya", "Africa/Algiers"];
  return (
    <section className="border-y border-hairline bg-canvas-soft">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 text-xs font-medium tracking-wide text-mute uppercase md:px-6">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-medium tracking-wide text-brand">The problem</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            WhatsApp on a phone is not a CRM.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-mute">
          <p>
            Deals live in chats. Quotes live in PDFs. Meta leads land in a sheet. The closer who left last month took the history with them.
          </p>
          <p>
            Imported CRMs bill you per seat, speak USD, and treat WhatsApp as an app you glue on later. You did not hire a sales team to administer software.
          </p>
          <p className="text-ink">
            EvoCRM is the surface sellers work in: Path on the lead, board on the deal, official WhatsApp on the record, ads on the source. One OS.
          </p>
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section id="compare" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <p className="text-xs font-medium tracking-wide text-brand">Compare</p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
        Built to outwork the giants. Not to impersonate them.
      </h2>
      <p className="mt-4 max-w-xl text-mute">
        Familiar chrome so sellers are not retrained. Different economics, channels, and geography so they close more.
      </p>
      <div className="mt-10 overflow-x-auto rounded-xl shadow-[var(--shadow-border)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand text-on-brand">
            <tr>
              <th className="px-4 py-3 font-medium md:px-6">Capability</th>
              <th className="px-4 py-3 font-medium md:px-6">EvoCRM</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell md:px-6">Imported CRM</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={row.label} className={i % 2 ? "bg-canvas-soft" : "bg-canvas"}>
                <td className="px-4 py-3 font-medium md:px-6">{row.label}</td>
                <td className="px-4 py-3 md:px-6">
                  <span className="inline-flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-voltage" />
                    {row.evo}
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-mute md:table-cell md:px-6">
                  <span className="inline-flex items-start gap-2">
                    <Minus className="mt-0.5 size-4 shrink-0" />
                    {row.other}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="bg-canvas-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-wide text-brand">Operators</p>
        <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Teams who sell in DA.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-xl bg-canvas p-6 shadow-[var(--shadow-border)] md:p-8">
              <blockquote className="flex-1 text-sm leading-relaxed">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-medium">{q.name}</p>
                <p className="text-mute">
                  {q.role} · {q.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { openDemo } = useDemo();
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <p className="text-xs font-medium tracking-wide text-brand">Pricing</p>
      <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Team-priced. Not seat-taxed.</h2>
      <p className="mt-4 max-w-xl text-mute">
        Hire a closer without opening a commercial conversation. Amounts in DA. Africa/Algiers billing day.
      </p>
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={cn(
              "flex flex-col rounded-xl p-6 md:p-8",
              plan.featured ? "bg-night text-inverse shadow-[var(--shadow-hero)]" : "bg-canvas shadow-[var(--shadow-border)]",
            )}
          >
            {plan.featured ? (
              <p className="text-xs font-medium tracking-wide text-voltage-soft">Most teams</p>
            ) : (
              <p className="text-xs font-medium tracking-wide text-mute">Plan</p>
            )}
            <h3 className="mt-3 font-display text-3xl">{plan.name}</h3>
            <p className={cn("mt-2 text-sm leading-relaxed", plan.featured ? "text-inverse-mute" : "text-mute")}>
              {plan.blurb}
            </p>
            <p className="money mt-6 text-4xl font-medium tracking-tight">
              {plan.price}
              <span className={cn("ml-2 text-sm font-medium", plan.featured ? "text-inverse-mute" : "text-mute")}>
                {plan.cadence}
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className={cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-voltage-soft" : "text-voltage")} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className="mt-8 w-full"
              variant={plan.featured ? "primary" : "outline"}
              onClick={() => openDemo(plan.id === "company" ? "talk" : "demo")}
            >
              {plan.cta}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-hairline bg-canvas-soft py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_1.4fr] md:px-6">
        <div>
          <p className="text-xs font-medium tracking-wide text-brand">FAQ</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight">Straight answers.</h2>
        </div>
        <div className="divide-y divide-hairline">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium">
                {item.q}
                <span className="text-mute group-open:hidden">+</span>
                <span className="hidden text-mute group-open:inline">–</span>
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { openDemo } = useDemo();
  return (
    <section className="aurora-night text-inverse">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div className="rounded-xl bg-night-elevated p-8">
          <p className="text-xs font-medium tracking-wide text-voltage-soft">Self-serve walkthrough</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">You already know the coverage you need.</h2>
          <p className="mt-3 text-sm leading-relaxed text-inverse-mute">
            Fifteen minutes on the pipeline, the WhatsApp desk, and Team pricing. Same-week start if the WABA is ready.
          </p>
          <Button className="mt-8" onClick={() => openDemo("demo")}>
            Book a demo
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="rounded-xl p-8 shadow-[0_0_0_1px_var(--color-inverse-line)]">
          <p className="text-xs font-medium tracking-wide text-inverse-mute">With an operator</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Complex stack, or self-host.</h2>
          <p className="mt-3 text-sm leading-relaxed text-inverse-mute">
            We map your current chats, mailboxes, and Meta accounts. Weekends included if a deal is waiting on a certificate of process.
          </p>
          <Button className="mt-8" variant="inverseOutline" onClick={() => openDemo("talk")}>
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-night text-inverse">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <Wordmark inverted />
          <p className="mt-3 max-w-xs text-sm text-inverse-mute">
            Evotechly sales OS. CRM, Desk, Outbound, Ads. Built in Algiers.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
          <div>
            <p className="font-medium">Product</p>
            <ul className="mt-3 space-y-2 text-inverse-mute">
              <li>
                <a href="#product">CRM</a>
              </li>
              <li>
                <a href="#modules">Desk</a>
              </li>
              <li>
                <a href="#modules">Outbound</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Company</p>
            <ul className="mt-3 space-y-2 text-inverse-mute">
              <li>Evotechly</li>
              <li>Algiers</li>
              <li>Africa/Algiers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-inverse-line">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-inverse-mute md:px-6">
          © {new Date().getFullYear()} Evotechly. EvoCRM is the CRM surface of EvoSales.
        </p>
      </div>
    </footer>
  );
}
