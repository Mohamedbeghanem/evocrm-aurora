import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Wordmark } from "@/components/brand/mark";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import { useDemo } from "./demo-context";

export function SiteNav() {
  const { openDemo } = useDemo();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-cream/80 backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 md:px-6">
        <a href="#top" className="shrink-0" aria-label="EvoCRM home">
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-mute md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-[150ms] hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" onClick={() => openDemo("talk")}>
            Talk to us
          </Button>
          <Button size="sm" onClick={() => openDemo("demo")}>
            Book a demo
          </Button>
        </div>
        <button
          type="button"
          className="ml-auto flex size-11 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div className={cn("border-t border-hairline md:hidden", open ? "block" : "hidden")}>
        <nav className="flex flex-col gap-1 px-4 py-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex h-11 items-center text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-2" onClick={() => openDemo("demo")}>
            Book a demo
          </Button>
        </nav>
      </div>
    </header>
  );
}
