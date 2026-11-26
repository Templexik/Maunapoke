import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mark } from "./Mark";
import { LangSwitch } from "./LangSwitch";
import { copy } from "@/content/copy";
import { paths, useLang } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const t = copy[lang].nav;
  const home = paths[lang].home === "/" ? "/" : paths[lang].home;
  const links = [
    { href: `${home}#menu`, label: t.menu },
    { href: `${home}#pribeh`, label: t.story },
    { href: paths[lang].origin, label: t.origin },
    { href: `${home}#o-nas`, label: t.about },
    { href: `${home}#kde`, label: t.where },
  ];
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-cocoa bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2">
        <Link to={home as "/"} aria-label={t.home} className="text-cocoa">
          <Mark shape="logo" className="h-14 md:h-16" />
        </Link>
        <nav className="hidden gap-8 md:flex" aria-label={t.main}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-display text-lg text-cocoa decoration-mustard decoration-4 underline-offset-8 hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <button
            className="btn-sticker bg-pink px-4 py-2 text-base text-cocoa md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? t.close : t.open}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t-[3px] border-cocoa bg-pink md:hidden" aria-label={t.mobile}>
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
