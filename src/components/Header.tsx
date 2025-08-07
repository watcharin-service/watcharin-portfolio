"use client";
import { useState } from "react";
import { Menu } from "lucide-react";

const items = [
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#projects", label: "โปรเจกต์" },
  { href: "#experience", label: "ประสบการณ์" },
  { href: "#contact", label: "ติดต่อ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-bold">Watcharin</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map(i => (
            <a key={i.href} href={i.href} className="opacity-80 hover:opacity-100">{i.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="toggle menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-200/60 dark:border-zinc-800/60">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3">
            {items.map(i => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100">
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}