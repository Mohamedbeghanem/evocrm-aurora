import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { DemoDialog } from "./demo-dialog";

type Intent = "demo" | "talk";

type Ctx = {
  openDemo: (intent?: Intent) => void;
};

const DemoCtx = createContext<Ctx | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState<Intent>("demo");
  const value = useMemo<Ctx>(
    () => ({
      openDemo: (next = "demo") => {
        setIntent(next);
        setOpen(true);
      },
    }),
    [],
  );
  return (
    <DemoCtx.Provider value={value}>
      {children}
      <DemoDialog open={open} onOpenChange={setOpen} intent={intent} />
    </DemoCtx.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoCtx);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
