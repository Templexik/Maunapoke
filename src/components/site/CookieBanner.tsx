import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { copy } from "@/content/copy";
import { paths, useLang } from "@/lib/i18n";

export type Consent = { necessary: true; analytics: boolean; marketing: boolean; date: string };
const KEY = "mauna-cookie-consent";
const EVENT = "mauna:cookie-settings";

export function openCookieSettings() {
  window.dispatchEvent(new Event(EVENT));
}

export function readConsent(): Consent | null {
  try { return JSON.parse(localStorage.getItem(KEY) ?? "null"); } catch { return null; }
}

// Web zatiaľ nepoužíva analytické ani marketingové skripty. Ak ich pridáš,
// spúšťaj ich len keď readConsent()?.analytics / .marketing je true.
export function CookieBanner() {
  const lang = useLang();
  const t = copy[lang].cookieBanner;
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (!c) setVisible(true);
    const open = () => {
      const cur = readConsent();
      setAnalytics(!!cur?.analytics); setMarketing(!!cur?.marketing);
      setSettings(true); setVisible(true);
    };
    window.addEventListener(EVENT, open);
    return () => window.removeEventListener(EVENT, open);
  }, []);

  const save = (a: boolean, m: boolean) => {
    localStorage.setItem(KEY, JSON.stringify({ necessary: true, analytics: a, marketing: m, date: new Date().toISOString() }));
    setVisible(false); setSettings(false);
  };

  if (!visible) return null;
  const btn = "btn-sticker justify-center bg-cream px-4 py-2 text-base text-cocoa";
  return (
    <div role="dialog" aria-labelledby="cookie-title" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-[1.5rem] border-[3px] border-cocoa bg-blush p-5 text-cocoa shadow-[6px_6px_0_var(--cocoa)] md:p-6">
      <h2 id="cookie-title" className="text-2xl">{t.title}</h2>
      <p className="mt-2">
        {t.text}{" "}
        {t.more} <Link to={paths[lang].cookies as "/"} className="font-bold underline">{t.policy}</Link>.
      </p>
      {settings && (
        <fieldset className="mt-4 space-y-3 rounded-xl border-2 border-cocoa bg-cream p-4">
          <legend className="px-1 font-bold">{t.categories}</legend>
          <label className="flex items-start gap-3"><input type="checkbox" checked disabled className="mt-1.5 size-5 accent-[var(--cocoa)]" /><span><b>{t.necessary}</b> – {t.necessaryText}</span></label>
          <label className="flex items-start gap-3"><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1.5 size-5 accent-[var(--cocoa)]" /><span><b>{t.analytics}</b> – {t.analyticsText}</span></label>
          <label className="flex items-start gap-3"><input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1.5 size-5 accent-[var(--cocoa)]" /><span><b>{t.marketing}</b> – {t.marketingText}</span></label>
        </fieldset>
      )}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <button className={btn} onClick={() => save(true, true)}>{t.acceptAll}</button>
        <button className={btn} onClick={() => save(false, false)}>{t.rejectAll}</button>
        {settings
          ? <button className={btn} onClick={() => save(analytics, marketing)}>{t.save}</button>
          : <button className={btn} onClick={() => setSettings(true)}>{t.settings}</button>}
      </div>
    </div>
  );
}
