import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { copy } from "@/content/copy";
import { paths, useLang } from "@/lib/i18n";
import { Mark } from "./Mark";
import { openCookieSettings } from "./CookieBanner";

export function Footer() {
  const lang = useLang();
  const t = copy[lang].footer;
  const p = paths[lang];
  const link = "hover:text-mustard hover:underline";
  return (
    <footer className="grain bg-cocoa text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Mark shape="logo" label="MAUNA POKE logo" className="h-36 text-cream" />
          <p className="mt-4 max-w-xs">{t.tagline} {site.address.place}, {site.address.city}.</p>
        </div>
        <div className="space-y-2">
          <h2 className="mb-4 text-2xl text-pink">{t.contact}</h2>
          {site.phones.map((n) => (
            <p key={n}><a className="underline-offset-4 hover:text-mustard hover:underline" href={`tel:${n.replace(/\s/g, "")}`}>{n}</a></p>
          ))}
          <p><a className="underline-offset-4 hover:text-mustard hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p className="flex gap-5 pt-2">
            <a className="font-bold underline underline-offset-4 hover:text-mustard" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram {site.instagramHandle}</a>
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl text-pink">{t.important}</h2>
          <ul className="space-y-2">
            <li><Link className={link} to={p.allergens as "/"}>{t.allergens}</Link></li>
            <li><Link className={link} to={p.operator as "/"}>{t.operator}</Link></li>
            <li><Link className={link} to={p.privacy as "/"}>{t.privacy}</Link></li>
            <li><Link className={link} to={p.cookies as "/"}>{t.cookies}</Link></li>
            <li><button className={link} onClick={openCookieSettings}>{t.cookieSettings}</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-cream/25">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm">
          © {new Date().getFullYear()} MAUNA POKE – {site.legalName}, {t.regId} {site.ico}, {t.vatId} {site.icDph}
        </p>
      </div>
    </footer>
  );
}
