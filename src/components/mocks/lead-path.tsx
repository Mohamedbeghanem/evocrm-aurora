import { MockRail, MockTopbar } from "./chrome";

const path = ["New", "Contacted", "Nurturing", "Unqualified", "Converted"] as const;

export function LeadPathMock() {
  const current = 1;
  return (
    <div className="flex h-full min-w-0 bg-canvas-soft">
      <MockRail />
      <div className="flex min-w-0 flex-1 flex-col bg-canvas">
        <MockTopbar title="Lead" />
        <div className="flex items-center justify-between gap-3 border-b border-hairline px-3 py-2">
          <div>
            <p className="text-micro tracking-wide text-subtle uppercase">Lead</p>
            <p className="text-mini font-semibold">Ms. Amina Boudiaf</p>
          </div>
          <div className="flex gap-1.5 text-micro">
            <span className="rounded-sm bg-mark px-2 py-1 font-medium text-on-mark">Convert</span>
            <span className="hidden rounded-sm px-2 py-1 shadow-[0_0_0_1px_rgba(17,17,17,0.1)] sm:inline">
              Change owner
            </span>
            <span className="hidden rounded-sm px-2 py-1 shadow-[0_0_0_1px_rgba(17,17,17,0.1)] md:inline">
              Edit
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto px-3 py-3">
          <div className="flex min-w-[28rem] flex-1">
            {path.map((step, i) => (
              <div
                key={step}
                className={
                  i <= current
                    ? `flex h-8 flex-1 items-center justify-center bg-ink px-2 text-micro font-medium text-inverse ${i === 0 ? "path-chevron-first" : "path-chevron"}`
                    : `flex h-8 flex-1 items-center justify-center bg-canvas-soft px-2 text-micro font-medium text-mute ${i === 0 ? "path-chevron-first" : "path-chevron"}`
                }
                style={{ marginLeft: i === 0 ? 0 : -8 }}
              >
                {step}
              </div>
            ))}
          </div>
          <span className="hidden shrink-0 rounded-sm px-2 py-1 text-micro font-medium text-mark ring-1 ring-mark/40 lg:inline">
            Mark as complete
          </span>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-hidden px-3 pb-3 lg:grid-cols-[1fr_1.3fr_1fr]">
          <section className="rounded-md bg-canvas-soft p-3">
            <p className="text-mini font-semibold">About</p>
            <dl className="mt-2 space-y-1.5 text-mini">
              <Row k="Company" v="Kasbah Commerce" />
              <Row k="Title" v="Purchasing" />
              <Row k="Wilaya" v="Constantine" />
              <Row k="Source" v="Meta · Ramadan" />
              <Row k="Owner" v="Yacine T." />
            </dl>
          </section>
          <section className="rounded-md bg-canvas-soft p-3">
            <p className="text-mini font-semibold">Upcoming & overdue</p>
            <ul className="mt-2 space-y-2 text-mini">
              <li>
                <span className="font-medium">Call</span>
                <span className="text-mute"> · Today 16:00 Africa/Algiers</span>
              </li>
              <li>
                <span className="font-medium">Send quote</span>
                <span className="text-mute"> · Tomorrow</span>
              </li>
              <li className="text-mute">WhatsApp template · enrolled</li>
            </ul>
          </section>
          <section className="rounded-md bg-canvas-soft p-3">
            <p className="text-mini font-semibold">Desk thread</p>
            <p className="mt-2 text-mini leading-relaxed">
              Last WhatsApp: “Can you invoice in DA with 30 days?” — 14m ago. Slack is not on this record.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-2">
      <dt className="text-subtle">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
