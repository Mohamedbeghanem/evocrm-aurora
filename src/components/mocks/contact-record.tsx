import {
  Calendar,
  CheckSquare,
  Mail,
  MessageCircle,
  Phone,
  StickyNote,
} from "lucide-react";
import { MockRail, MockTopbar } from "./chrome";

const actions = [
  { icon: StickyNote, label: "Note" },
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Call" },
  { icon: CheckSquare, label: "Task" },
  { icon: Calendar, label: "Meet" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export function ContactRecordMock() {
  return (
    <div className="flex h-full min-w-0 bg-canvas-soft">
      <MockRail />
      <div className="flex min-w-0 flex-1 flex-col">
        <MockTopbar title="Contacts" />
        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-[13.75rem_1fr_14.5rem]">
          <aside className="hidden overflow-y-auto border-r border-hairline bg-canvas p-3 md:block">
            <p className="text-micro text-mark">Contacts</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-ink text-mini font-semibold text-inverse">
                SK
              </span>
              <div>
                <p className="text-mini font-semibold">Sofiane Khelifi</p>
                <p className="text-micro text-mute">Buyer · Sahra Logistics</p>
              </div>
            </div>
            <div className="mt-3 flex justify-between">
              {actions.map((a) => {
                const Icon = a.icon;
                return (
                  <span key={a.label} className="flex flex-col items-center gap-0.5 py-1 text-micro text-mute">
                    <Icon className="size-3.5" strokeWidth={1.75} />
                    {a.label}
                  </span>
                );
              })}
            </div>
            <p className="mt-4 text-micro font-semibold tracking-wide text-subtle uppercase">About this contact</p>
            <dl className="mt-2 space-y-2 text-mini">
              <Field k="Email" v="sofiane@sahra.dz" />
              <Field k="WhatsApp" v="+213 555 14 22 09" />
              <Field k="Wilaya" v="Alger" />
              <Field k="Lead status" v="Open deal" />
              <Field k="Create date" v="12 Aug · Africa/Algiers" />
            </dl>
          </aside>

          <section className="min-w-0 overflow-y-auto bg-canvas-soft p-3">
            <div className="flex items-center gap-4 border-b border-hairline text-mini">
              <span className="border-b-2 border-ink pb-2 font-medium">Overview</span>
              <span className="pb-2 text-mute">Activities</span>
              <span className="pb-2 text-mute">Intelligence</span>
            </div>
            <p className="mt-3 text-micro font-semibold tracking-wide text-subtle uppercase">Data highlights</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <Highlight label="Create date" value="12 Aug" />
              <Highlight label="Lifecycle" value="Deal · Proposal" />
              <Highlight label="Last WhatsApp" value="2h ago" />
            </div>
            <p className="mt-4 text-micro font-semibold tracking-wide text-subtle uppercase">Recent activities</p>
            <ol className="mt-2 space-y-2">
              <Activity kind="WhatsApp" time="Today 09:14">
                Sofiane confirmed the 12-van slot for October. Asked for a DA quote with 30-day terms.
              </Activity>
              <Activity kind="Call" time="Yesterday">
                Logged by Amine. Connected. Next: send the 4.28M DA proposal.
              </Activity>
              <Activity kind="Outbound" time="Mon">
                Sequence step 2 opened. Warmup mailbox healthy.
              </Activity>
            </ol>
          </section>

          <aside className="hidden overflow-y-auto border-l border-hairline bg-canvas p-3 md:block">
            <div className="rounded-md bg-ask p-3 ring-1 ring-mark/30">
              <div className="flex items-center justify-between">
                <span className="text-mini font-semibold text-mark">Ask Evo</span>
                <span className="rounded-full bg-canvas px-1.5 py-px text-micro text-subtle">This record</span>
              </div>
              <p className="mt-2 text-mini leading-relaxed">
                Sofiane is waiting on a 4.28M DA proposal. Last WhatsApp asked for 30-day terms. The Meta campaign Fleet still has budget. Send the deal card today.
              </p>
              <p className="mt-2 text-micro font-medium text-mark">Ask a question</p>
            </div>
            <p className="mt-4 text-micro font-semibold tracking-wide text-subtle uppercase">Companies (1)</p>
            <p className="mt-1.5 text-mini font-medium">Sahra Logistics</p>
            <p className="text-micro text-mute">Alger · Primary</p>
            <p className="mt-3 text-micro font-semibold tracking-wide text-subtle uppercase">Deals (1)</p>
            <p className="mt-1.5 text-mini font-medium">Fleet onboarding</p>
            <p className="money text-micro text-mute">4 280 000 DA · Proposal</p>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-micro text-subtle">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}

function Highlight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm bg-canvas px-2 py-1.5 shadow-[var(--shadow-border)]">
      <p className="text-micro tracking-wide text-subtle uppercase">{label}</p>
      <p className="mt-0.5 text-mini font-medium">{value}</p>
    </div>
  );
}

function Activity({ kind, time, children }: { kind: string; time: string; children: string }) {
  return (
    <li className="rounded-sm bg-canvas p-2.5 shadow-[var(--shadow-border)]">
      <p className="text-micro font-medium text-mark">
        {kind} · {time}
      </p>
      <p className="mt-1 text-mini leading-relaxed text-ink">{children}</p>
    </li>
  );
}
