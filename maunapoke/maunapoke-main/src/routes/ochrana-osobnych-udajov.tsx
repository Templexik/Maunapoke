import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/ochrana-osobnych-udajov")({
  head: () => ({ meta: [
    { title: "Ochrana osobných údajov | MAUNA POKE" },
    { name: "description", content: "Ako MAUNA POKE spracúva osobné údaje podľa GDPR a zákona č. 18/2018 Z. z." },
    { property: "og:title", content: "Ochrana osobných údajov | MAUNA POKE" },
    { property: "og:description", content: "Zásady spracúvania osobných údajov." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: () => (
    <LegalPage title="Ochrana osobných údajov" intro="Podľa nariadenia (EÚ) 2016/679 (GDPR) a zákona č. 18/2018 Z. z. o ochrane osobných údajov. Platné od [dátum].">
      <h2>1. Kto je prevádzkovateľ</h2>
      <p>{site.legalName}, {site.seat}, IČO {site.ico}. Kontakt: {site.email}, {site.phone}. Zodpovednú osobu sme nevymenovali, lebo to pre nás nie je povinné.</p>
      <h2>2. Aké údaje spracúvame</h2>
      <ul>
        <li><b>Technické logy</b> – IP adresa, čas prístupu, typ prehliadača. Zaznamenáva ich hosting kvôli bezpečnosti a prevádzke webu.</li>
        <li><b>Cookies</b> – len nevyhnutné, ktoré uchovávajú tvoju voľbu súhlasu. Viac v <Link to="/cookies">zásadách cookies</Link>.</li>
        <li><b>Kontakt</b> – ak nám napíšeš e-mail alebo zavoláš, spracúvame tvoje meno, e-mail či telefón a obsah správy.</li>
      </ul>
      <p>Web nemá kontaktný formulár, registráciu ani online objednávky.</p>
      <h2>3. Účel a právny základ</h2>
      <ul>
        <li>Prevádzka a bezpečnosť webu – oprávnený záujem (čl. 6 ods. 1 písm. f GDPR).</li>
        <li>Odpoveď na tvoju správu – oprávnený záujem, prípadne opatrenia pred uzavretím zmluvy (čl. 6 ods. 1 písm. b, f).</li>
        <li>Nepovinné cookies a mapa – tvoj súhlas (čl. 6 ods. 1 písm. a).</li>
      </ul>
      <h2>4. Ako dlho údaje uchovávame</h2>
      <ul>
        <li>Technické logy – najviac [30] dní.</li>
        <li>Komunikácia – kým je potrebná na vybavenie, najviac [1 rok].</li>
        <li>Voľba cookies – kým ju nezmeníš alebo nevymažeš.</li>
      </ul>
      <h2>5. Príjemcovia</h2>
      <p>Poskytovateľ hostingu: [názov poskytovateľa hostingu, sídlo]. Analytické ani marketingové nástroje nepoužívame. Ak načítaš mapu, údaje získava Google Ireland Ltd.</p>
      <h2>6. Prenos do tretích krajín</h2>
      <p>Údaje bežne neprenášame mimo EÚ/EHP. Pri načítaní mapy Google môže dôjsť k prenosu do USA na základe rozhodnutia Európskej komisie o primeranosti (EU-US Data Privacy Framework) alebo štandardných zmluvných doložiek.</p>
      <h2>7. Tvoje práva</h2>
      <ul>
        <li>právo na prístup k údajom,</li>
        <li>právo na opravu,</li>
        <li>právo na vymazanie,</li>
        <li>právo na obmedzenie spracúvania,</li>
        <li>právo na prenosnosť,</li>
        <li>právo namietať spracúvanie,</li>
        <li>právo kedykoľvek odvolať súhlas (bez vplyvu na zákonnosť spracúvania pred odvolaním).</li>
      </ul>
      <p>Žiadosť pošli na {site.email}. Odpovieme do jedného mesiaca.</p>
      <h2>8. Sťažnosť</h2>
      <p>Máš právo podať sťažnosť na Úrad na ochranu osobných údajov SR, Hraničná 12, 820 07 Bratislava 27, <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a>.</p>
    </LegalPage>
  ),
});
