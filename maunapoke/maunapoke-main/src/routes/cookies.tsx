import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { openCookieSettings } from "@/components/site/CookieBanner";

// Ak pridáš analytiku alebo marketing, doplň ich sem ako nové riadky.
const cookies = [
  { name: "mauna-cookie-consent", provider: "MAUNA POKE (tento web)", purpose: "Uchováva tvoju voľbu súhlasu s cookies (localStorage).", duration: "do zmazania / zmeny voľby", category: "Nevyhnutné" },
  { name: "Google Maps (NID, AEC a iné)", provider: "Google Ireland Ltd.", purpose: "Zobrazenie mapy. Nastavuje sa len ak klikneš na „Načítať mapu“.", duration: "až 6 mesiacov", category: "Tretia strana – na kliknutie" },
];

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [
    { title: "Zásady cookies | MAUNA POKE" },
    { name: "description", content: "Aké cookies používa web MAUNA POKE a ako zmeniť svoj súhlas." },
    { property: "og:title", content: "Zásady cookies | MAUNA POKE" },
    { property: "og:description", content: "Používame len nevyhnutné cookies." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: () => (
    <LegalPage title="Zásady cookies" intro="Cookies sú malé súbory, ktoré si web ukladá v tvojom prehliadači. My ich používame čo najmenej.">
      <h2>Kategórie</h2>
      <ul>
        <li><b>Nevyhnutné</b> – potrebné na fungovanie webu, vždy zapnuté (§ 109 ods. 8 zákona č. 452/2021 Z. z. o elektronických komunikáciách).</li>
        <li><b>Analytické</b> – merali by návštevnosť. Momentálne žiadne nepoužívame. Predvolene vypnuté.</li>
        <li><b>Marketingové</b> – slúžili by na reklamu. Momentálne žiadne nepoužívame. Predvolene vypnuté.</li>
      </ul>
      <p>Pred tvojím súhlasom nespúšťame žiadne skripty tretích strán. Instagram je len obyčajný odkaz, nie vložený widget.</p>
      <h2>Zoznam cookies</h2>
      <div className="overflow-x-auto">
        <table><thead><tr><th>Názov</th><th>Poskytovateľ</th><th>Účel</th><th>Platnosť</th><th>Kategória</th></tr></thead><tbody>
          {cookies.map((c) => <tr key={c.name}><td className="font-bold">{c.name}</td><td>{c.provider}</td><td>{c.purpose}</td><td>{c.duration}</td><td>{c.category}</td></tr>)}
        </tbody></table>
      </div>
      <h2>Zmena súhlasu</h2>
      <p>Súhlas môžeš kedykoľvek zmeniť alebo odvolať. Klikni na „Nastavenia cookies“ v päte webu alebo sem:</p>
      <button onClick={openCookieSettings} className="btn-sticker bg-pink text-cocoa hover:bg-mustard">Nastavenia cookies</button>
    </LegalPage>
  ),
});
