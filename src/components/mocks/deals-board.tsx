import { ChevronDown, Columns3, List, Search, SlidersHorizontal } from "lucide-react";
import { deals, stages } from "@/lib/demo-data";
import { formatDzd } from "@/lib/utils";
import { MockChip, MockRail, MockTopbar } from "./chrome";

const filters = ["Deal owner", "Create date", "Last activity", "Close date", "+ More"];

export function DealsBoardMock() {
  return (
    <div className="flex h-full min-w-0 bg-canvas">
      <MockRail />
      <div className="flex min-w-0 flex-1 flex-col">
        <MockTopbar title="Deals" action="Create deal" />
        <div className="flex items-center gap-2 border-b border-hairline px-3 py-1.5">
          <MockChip active>All deals</MockChip>
          <MockChip>My deals</MockChip>
          <MockChip>Stalled</MockChip>
          <span className="ml-auto hidden text-micro text-subtle md:inline">+ Add view</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto border-b border-hairline px-3 py-1.5">
          <span className="hidden rounded-sm p-1 text-ink sm:inline">
            <Columns3 className="size-3.5" />
          </span>
          <span className="hidden rounded-sm p-1 text-subtle sm:inline">
            <List className="size-3.5" />
          </span>
          <span className="hidden items-center gap-0.5 text-micro font-medium text-mark sm:inline-flex">
            Sales pipeline
            <ChevronDown className="size-3" />
          </span>
          {filters.map((f) => (
            <span
              key={f}
              className="hidden h-6 shrink-0 items-center rounded-sm px-2 text-micro text-mark md:inline-flex"
            >
              {f}
            </span>
          ))}
          <span className="ml-auto hidden items-center gap-1 text-micro text-mark lg:inline-flex">
            <SlidersHorizontal className="size-3" />
            Advanced
          </span>
          <span className="flex h-6 items-center gap-1 rounded-sm bg-canvas-soft px-2 text-micro text-subtle">
            <Search className="size-3" />
            Search
          </span>
        </div>
        <div className="flex min-h-0 flex-1 gap-px overflow-x-auto bg-hairline">
          {stages.map((stage) => {
            const cards = deals.filter((d) => d.stage === stage.id);
            const total = cards.reduce((s, d) => s + d.amount, 0);
            const weighted = Math.round(total * stage.weight);
            return (
              <div key={stage.id} className="flex w-48 shrink-0 flex-col bg-canvas">
                <div className="flex items-center justify-between px-2.5 py-2">
                  <span className="text-micro font-semibold tracking-wide text-subtle uppercase">
                    {stage.id}
                  </span>
                  <span className="text-micro text-subtle">{cards.length}</span>
                </div>
                <div className="flex flex-1 flex-col gap-2 px-2 pb-2">
                  {cards.map((card) => (
                    <article key={card.id} className="rounded-sm bg-canvas p-2 shadow-[var(--shadow-border)]">
                      <p className="text-mini font-medium leading-snug text-mark">{card.title}</p>
                      <p className="mt-1 text-micro text-mute">
                        Amount: <span className="money text-ink">{formatDzd(card.amount)}</span>
                      </p>
                      <p className="text-micro text-mute">Close date: {card.close}</p>
                      <p className="mt-1.5 text-micro text-subtle">{card.inactivity}</p>
                      <div className="mt-1 flex items-center justify-between gap-1">
                        <span className="text-micro text-warn">
                          {card.scheduled ? "" : "! No activity scheduled"}
                        </span>
                        <span
                          className={
                            card.priority === "High"
                              ? "rounded-full bg-mark/10 px-1.5 py-px text-micro font-medium text-mark"
                              : "rounded-full bg-canvas-soft px-1.5 py-px text-micro text-mute"
                          }
                        >
                          {card.priority}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="border-t border-hairline px-2.5 py-1.5 text-micro text-subtle">
                  <p>
                    Total: <span className="money">{formatDzd(total)}</span>
                  </p>
                  <p>
                    Weighted: <span className="money">{formatDzd(weighted)}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
