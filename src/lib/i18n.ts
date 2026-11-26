import { useRouterState } from "@tanstack/react-router";

export type Lang = "sk" | "en";
export type PageKey = "home" | "allergens" | "operator" | "privacy" | "cookies";

/** URL každej stránky v oboch jazykoch. Pri pridaní stránky ju doplň sem aj do src/routes. */
export const paths: Record<Lang, Record<PageKey, string>> = {
  sk: { home: "/", allergens: "/alergeny", operator: "/prevadzkovatel", privacy: "/ochrana-osobnych-udajov", cookies: "/cookies" },
  en: { home: "/en", allergens: "/en/allergens", operator: "/en/operator", privacy: "/en/privacy", cookies: "/en/cookies" },
};

const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

export function langFromPath(pathname: string): Lang {
  const p = norm(pathname);
  return p === "/en" || p.startsWith("/en/") ? "en" : "sk";
}

export function pageKeyFromPath(pathname: string): PageKey | null {
  const p = norm(pathname);
  for (const lang of ["sk", "en"] as const) {
    for (const key of Object.keys(paths[lang]) as PageKey[]) {
      if (paths[lang][key] === p) return key;
    }
  }
  return null;
}

export function useLang(): Lang {
  return useRouterState({ select: (s) => langFromPath(s.location.pathname) });
}

/** Cesta na rovnakú stránku v inom jazyku (ak neexistuje, domovská stránka). */
export function pathInLang(pathname: string, lang: Lang): string {
  const key = pageKeyFromPath(pathname) ?? "home";
  return paths[lang][key];
}
