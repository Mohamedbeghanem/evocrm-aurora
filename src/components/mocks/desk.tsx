import { Search, Smile, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";
import { MockRail, MockTopbar } from "./chrome";

const threads = [
  { initials: "SK", name: "Sofiane K.", preview: "30-day terms work if the vans…", time: "2m", active: true, unread: 2 },
  { initials: "NC", name: "Nour Clinique", preview: "Confirming Friday slot", time: "18m", active: false, unread: 0 },
  { initials: "AP", name: "Atlas Parts", preview: "Need Oran pricing", time: "1h", active: false, unread: 1 },
  { initials: "TA", name: "Tell Agency", preview: "Creative for the Meta set", time: "3h", active: false, unread: 0 },
  { initials: "PA", name: "Port d'Alger", preview: "WABA documents received", time: "Yesterday", active: false, unread: 0 },
];

export function DeskMock() {
  return (
    <div className="flex h-full min-w-0 bg-canvas">
      <MockRail />
      <div className="flex min-w-0 flex-1 flex-col">
        <MockTopbar title="Desk · WhatsApp Cloud" />
        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden sm:grid-cols-[13.75rem_1fr]">
          <aside className="hidden min-h-0 flex-col border-r border-hairline sm:flex">
            <div className="flex items-center gap-2 border-b border-hairline px-3 py-2">
              <span className="flex h-7 flex-1 items-center gap-1.5 rounded-full bg-canvas-soft px-2 text-micro text-subtle">
                <Search className="size-3" />
                Search desk
              </span>
            </div>
            <div className="flex gap-1 px-3 py-2">
              <span className="rounded-full bg-ink px-2 py-0.5 text-micro font-medium text-inverse">All</span>
              <span className="rounded-full px-2 py-0.5 text-micro text-mute">Unread</span>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              {threads.map((t) => (
                <div
                  key={t.name}
                  className={cn(
                    "flex gap-2 border-l-2 px-3 py-2.5",
                    t.active ? "border-mark bg-ask" : "border-transparent",
                  )}
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-micro font-semibold text-inverse">
                    {t.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-mini font-medium">{t.name}</span>
                      <span className="text-micro text-subtle">{t.time}</span>
                    </div>
                    <p className="truncate text-micro text-mute">{t.preview}</p>
                  </div>
                  {t.unread ? (
                    <span className="mt-1 flex size-4 items-center justify-center rounded-full bg-mark text-micro font-semibold text-on-mark">
                      {t.unread}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </aside>
          <section className="flex min-h-0 flex-col bg-canvas-soft">
            <div className="flex items-center gap-2 border-b border-hairline bg-canvas px-3 py-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-ink text-micro font-semibold text-inverse">
                SK
              </span>
              <div>
                <p className="text-mini font-semibold">Sofiane Khelifi · Sahra Logistics</p>
                <p className="text-micro text-mute">Official WhatsApp Cloud · last seen 2m ago</p>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden p-3">
              <p className="self-center rounded-full bg-canvas px-2 py-0.5 text-micro text-subtle">Today</p>
              <Bubble mine={false} time="09:12">Can you invoice in DA with 30 days?</Bubble>
              <Bubble mine time="09:14">
                Yes. 4 280 000 DA, 30 days, vans in October. Sending the deal card.
              </Bubble>
              <Bubble mine={false} time="09:16">30-day terms work if the vans ship from Alger.</Bubble>
            </div>
            <div className="flex items-center gap-2 border-t border-hairline bg-canvas px-3 py-2">
              <Paperclip className="size-4 text-subtle" />
              <span className="flex h-9 flex-1 items-center rounded-full bg-canvas-soft px-3 text-mini text-subtle">
                Reply on WhatsApp
              </span>
              <Smile className="size-4 text-subtle" />
              <span className="flex h-8 items-center rounded-full bg-mark px-3 text-micro font-medium text-on-mark">
                Send
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Bubble({ mine, time, children }: { mine?: boolean; time: string; children: string }) {
  return (
    <div className={mine ? "ml-10 self-end" : "mr-10 self-start"}>
      <p
        className={
          mine
            ? "rounded-md rounded-br-xs bg-ink px-3 py-2 text-mini text-inverse"
            : "rounded-md rounded-bl-xs bg-canvas px-3 py-2 text-mini shadow-[var(--shadow-border)]"
        }
      >
        {children}
      </p>
      <p className={mine ? "mt-0.5 text-right text-micro text-subtle" : "mt-0.5 text-micro text-subtle"}>{time}</p>
    </div>
  );
}
