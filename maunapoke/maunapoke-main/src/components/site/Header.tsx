import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mark } from "./Mark";

const links = [
  { href: "/#menu", label: "Menu" },
  { href: "/#pribeh", label: "Príbeh" },
  { href: "/#kde", label: "Kde nás nájdeš" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-cocoa bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link to="/" aria-label="MAUNA POKE – domov" className="text-cocoa">
          <Mark shape="logo" className="h-14 md:h-16" />
        </Link>
        <nav className="hidden gap-8 md:flex" aria-label="Hlavná navigácia">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-display text-lg text-cocoa decoration-mustard decoration-4 underline-offset-8 hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="btn-sticker bg-pink px-4 py-2 text-base text-cocoa md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Zavrieť" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t-[3px] border-cocoa bg-pink md:hidden" aria-label="Mobilná navigácia">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b-2 border-cocoa/30 px-6 py-4 font-display text-2xl text-cocoa">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
