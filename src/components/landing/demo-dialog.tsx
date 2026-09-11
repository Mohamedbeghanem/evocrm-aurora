import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "evocrm-demo-leads";

type Lead = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  seats: string;
  note: string;
  at: string;
};

export function DemoDialog({
  open,
  onOpenChange,
  intent = "demo",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  intent?: "demo" | "talk";
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lead: Lead = {
      name: String(form.get("name") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      whatsapp: String(form.get("whatsapp") ?? "").trim(),
      seats: String(form.get("seats") ?? "").trim(),
      note: String(form.get("note") ?? "").trim(),
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Lead[];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([lead, ...prev].slice(0, 20)));
    setSent(true);
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) setSent(false);
        onOpenChange(next);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2",
            "rounded-xl bg-canvas p-6 shadow-[var(--shadow-lift)] md:p-8",
          )}
        >
          <Dialog.Close
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full text-mute hover:bg-canvas-soft"
            aria-label="Close"
          >
            <X className="size-4" />
          </Dialog.Close>

          {sent ? (
            <div className="py-6 text-center">
              <p className="font-display text-3xl">We have the note.</p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mute">
                An operator will message you on WhatsApp or email within one business day, Algiers time.
              </p>
              <Button className="mt-6" onClick={() => onOpenChange(false)}>
                Back to EvoCRM
              </Button>
            </div>
          ) : (
            <>
              <Dialog.Title className="font-display text-3xl tracking-tight">
                {intent === "talk" ? "Talk to an operator" : "Book a demo"}
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-relaxed text-mute">
                Fifteen minutes. We walk the pipeline, the WhatsApp desk, and pricing in DA. No deck.
              </Dialog.Description>
              <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
                <Field name="name" label="Name" required autoComplete="name" />
                <Field name="company" label="Company" required />
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field name="email" label="Work email" type="email" required autoComplete="email" />
                  <Field name="whatsapp" label="WhatsApp" placeholder="+213 …" required />
                </div>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Seats</span>
                  <select
                    name="seats"
                    defaultValue="5-20"
                    className="h-11 rounded-md bg-canvas-soft px-3 text-sm shadow-[0_0_0_1px_rgba(17,17,17,0.08)]"
                  >
                    <option value="1-4">1–4</option>
                    <option value="5-20">5–20</option>
                    <option value="20+">20+</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">What should we look at?</span>
                  <textarea
                    name="note"
                    rows={3}
                    className="resize-none rounded-md bg-canvas-soft px-3 py-2 text-sm shadow-[0_0_0_1px_rgba(17,17,17,0.08)]"
                    placeholder="WhatsApp desk, Meta leads, self-host…"
                  />
                </label>
                <Button type="submit" size="lg" className="mt-2 w-full">
                  {intent === "talk" ? "Send" : "Request demo"}
                </Button>
                <p className="text-center text-xs text-subtle">Africa/Algiers. We do not sell this list.</p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-11 rounded-md bg-canvas-soft px-3 text-sm shadow-[0_0_0_1px_rgba(17,17,17,0.08)]"
      />
    </label>
  );
}
