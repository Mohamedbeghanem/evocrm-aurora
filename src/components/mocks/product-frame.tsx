import { useState } from "react";
import { cn } from "@/lib/utils";
import { ContactRecordMock } from "./contact-record";
import { DealsBoardMock } from "./deals-board";
import { DeskMock } from "./desk";
import { LeadPathMock } from "./lead-path";

const tabs = [
  { id: "pipeline", label: "Pipeline" },
  { id: "record", label: "Record" },
  { id: "path", label: "Path" },
  { id: "desk", label: "Desk" },
] as const;

export type ProductTab = (typeof tabs)[number]["id"];

export function ProductFrame({
  className,
  initialTab = "pipeline",
  showTabs = true,
  lockedTab,
}: {
  className?: string;
  initialTab?: ProductTab;
  showTabs?: boolean;
  lockedTab?: ProductTab;
}) {
  const [tab, setTab] = useState<ProductTab>(lockedTab ?? initialTab);
  const active = lockedTab ?? tab;

  return (
    <div className={cn("overflow-hidden rounded-xl bg-canvas shadow-[var(--shadow-hero)]", className)}>
      <div className="flex items-center gap-3 border-b border-hairline bg-canvas-soft px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-hairline" />
          <span className="size-2.5 rounded-full bg-hairline" />
          <span className="size-2.5 rounded-full bg-hairline" />
        </div>
        <div className="flex-1 truncate rounded-md bg-canvas px-3 py-1 text-center font-mono text-micro text-mute">
          app.evocrm.dz / crm
        </div>
      </div>

      {showTabs && !lockedTab ? (
        <div className="flex gap-1 border-b border-hairline px-3 py-2" role="tablist" aria-label="Product surfaces">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-8 rounded-full px-3 text-xs font-medium transition-colors duration-[150ms]",
                active === t.id ? "bg-ink-button text-inverse" : "text-mute hover:bg-canvas-soft hover:text-ink",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="product-stage overflow-hidden bg-canvas-soft">
        {active === "pipeline" && <DealsBoardMock />}
        {active === "record" && <ContactRecordMock />}
        {active === "path" && <LeadPathMock />}
        {active === "desk" && <DeskMock />}
      </div>
    </div>
  );
}
