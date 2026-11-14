import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { Mark } from "./Mark";
import { openCookieSettings } from "./CookieBanner";

export function Footer() {
  return (
    <footer className="grain bg-cocoa text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Mark shape="logo" label="MAUNA POKE logo" className="h-36 text-cream" />
          <p className="mt-4 max-w-xs">Poke z čerstvého lososa a tuniaka. {site.address.place}, {site.address.city}.</p>
        </div>
        <div className="space-y-2">
          <h2 className="mb-4 text-2xl text-pink">Ozvi sa</h2>
          <p><a className="underline-offset-4 hover:text-mustard hover:underline" href={`tel:${site.phone}`}>{site.phone}</a></p>
          <p><a className="underline-offset-4 hover:text-mustard hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p className="flex gap-5 pt-2">
            <a className="font-bold underline underline-offset-4 hover:text-mustard" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="font-bold underline underline-offset-4 hover:text-mustard" href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl text-pink">Dôležité</h2>
          <ul className="space-y-2">
            <li><Link className="hover:text-mustard hover:underline" to="/alergeny">Alergény</Link></li>
            <li><Link className="hover:text-mustard hover:underline" to="/prevadzkovatel">Informácie o prevádzkovateľovi</Link></li>
            <li><Link className="hover:text-mustard hover:underline" to="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link></li>
            <li><Link className="hover:text-mustard hover:underline" to="/cookies">Zásady cookies</Link></li>
            <li><button className="hover:text-mustard hover:underline" onClick={openCookieSettings}>Nastavenia cookies</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-cream/25">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm">
          © {new Date().getFullYear()} MAUNA POKE – {site.legalName}, IČO {site.ico}
        </p>
      </div>
    </footer>
  );
}
