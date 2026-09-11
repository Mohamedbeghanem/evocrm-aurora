import {
  Building2,
  Contact,
  Home,
  Inbox,
  LayoutGrid,
  Megaphone,
  MoreHorizontal,
  Search,
  Send,
} from "lucide-react";
import { EvoMark } from "@/components/brand/mark";
import { cn } from "@/lib/utils";

const items = [
  { icon: Home, active: false, label: "Home" },
  { icon: Contact, active: true, label: "Contacts" },
  { icon: Building2, active: false, label: "Companies" },
  { icon: LayoutGrid, active: false, label: "Deals" },
  { icon: Inbox, active: false, label: "Desk" },
  { icon: Send, active: false, label: "Outbound" },
  { icon: Megaphone, active: false, label: "Ads" },
];

export function MockRail() {
  return (
    <aside className="hidden h-full w-12 shrink-0 flex-col items-center gap-1 border-r border-hairline bg-canvas-soft py-3 sm:flex">
      <EvoMark className="mb-3 size-5 text-mark" />
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <span
            key={item.label}
            title={item.label}
            className={cn(
              "flex size-8 items-center justify-center rounded-md",
              item.active ? "bg-voltage-glow text-voltage" : "text-mute",
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} />
          </span>
        );
      })}
      <span className="mt-auto flex size-8 items-center justify-center text-mute">
        <MoreHorizontal className="size-4" />
      </span>
    </aside>
  );
}

export function MockTopbar({ title, action }: { title: string; action?: string }) {
  return (
    <header className="flex h-11 shrink-0 items-center gap-3 border-b border-hairline bg-canvas px-3">
      <p className="text-mini font-medium">{title}</p>
      <div className="ml-auto hidden items-center gap-2 sm:flex">
        <span className="flex h-7 items-center gap-1.5 rounded-md bg-canvas-soft px-2 text-micro text-mute">
          <Search className="size-3" />
          Find or Ask
        </span>
        {action ? (
          <span className="flex h-7 items-center rounded-md bg-mark px-2.5 text-micro font-medium text-on-mark">
            {action}
          </span>
        ) : null}
      </div>
    </header>
  );
}

export function MockChip({
  children,
  active = false,
}: {
  children: string;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 shrink-0 items-center rounded-full px-2 text-micro font-medium",
        active ? "bg-ink-button text-inverse" : "text-mute",
      )}
    >
      {children}
    </span>
  );
}
