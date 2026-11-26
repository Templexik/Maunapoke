import { Link, useRouterState } from "@tanstack/react-router";
import { useLang, pathInLang, type Lang } from "@/lib/i18n";
import { copy } from "@/content/copy";

/** Prepínač SK | EN. Vedie na rovnakú stránku v druhom jazyku. */
export function LangSwitch({ className = "" }: { className?: string }) {
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const item = (l: Lang, label: string, name: string) => {
    const active = l === lang;
    return (
      <Link
        to={pathInLang(pathname, l) as "/"}
        hrefLang={l}
        lang={l}
        aria-current={active ? "true" : undefined}
        aria-label={name}
        title={name}
        className={`px-3 py-1 font-display text-base leading-none ${active ? "bg-cocoa text-cream" : "text-cocoa hover:bg-mustard"}`}
      >
        {label}
      </Link>
    );
  };
  return (
    <div role="group" aria-label={copy[lang].nav.lang} className={`inline-flex overflow-hidden rounded-full border-[3px] border-cocoa ${className}`}>
      {item("sk", "SK", "Slovenčina")}
      {item("en", "EN", "English")}
    </div>
  );
}
