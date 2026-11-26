import { Link } from "@tanstack/react-router";
import { site, menu } from "@/content/site";
import { copy } from "@/content/copy";
import { paths, type Lang } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { openCookieSettings } from "@/components/site/CookieBanner";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function AllergensPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const sk = lang === "sk";
  const raw = sk
    ? "Poke obsahuje surovú rybu. Nie je vhodné pre tehotné ženy, malé deti, seniorov a osoby s oslabenou imunitou."
    : "Poke contains raw fish. It is not suitable for pregnant women, young children, older adults or people with weakened immunity.";
  const note = sk
    ? "Údaje o alergénoch sú orientačné. Jedlá pripravujeme v prevádzke, kde sa spracúvajú všetky uvedené alergény, preto nemožno úplne vylúčiť skrížený kontakt. V prípade alergie alebo intolerancie sa informuj u obsluhy pred objednávkou."
    : "Allergen information is indicative. We prepare our food in a kitchen where all the listed allergens are handled, so cross-contact cannot be completely ruled out. If you have an allergy or intolerance, please ask our staff before ordering.";
  return (
    <LegalPage
      title={sk ? "Alergény" : "Allergens"}
      intro={sk ? "Podľa nariadenia (EÚ) č. 1169/2011 o poskytovaní informácií o potravinách spotrebiteľom." : "Under Regulation (EU) No 1169/2011 on the provision of food information to consumers."}
    >
      <p className="rounded-xl border-[3px] border-cocoa bg-mustard p-4 font-bold">{raw}</p>
      <h2>{sk ? "Alergény v našich miskách" : "Allergens in our bowls"}</h2>
      <table><thead><tr><th>Poke</th><th>{sk ? "Alergény" : "Allergens"}</th></tr></thead><tbody>
        {menu.flatMap((b) => b.dishes).map((d) => (
          <tr key={d.name}><td className="font-bold">{d.name}</td><td>{d.allergens.map((a) => `${a} ${t.allergens[a - 1]}`).join(", ")}</td></tr>
        ))}
      </tbody></table>
      <h2>{sk ? "Zoznam 14 alergénov" : "The 14 allergens"}</h2>
      <ol className="grid gap-2 sm:grid-cols-2">
        {t.allergens.map((a, i) => (
          <li key={a} className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-cocoa bg-pink font-bold">{i + 1}</span>{a}</li>
        ))}
      </ol>
      <h2>{sk ? "Dôležité" : "Important"}</h2>
      <p>{note}</p>
    </LegalPage>
  );
}

export function OperatorPage({ lang }: { lang: Lang }) {
  const sk = lang === "sk";
  const t = copy[lang];
  const a = site.address;
  return (
    <LegalPage title={sk ? "Informácie o prevádzkovateľovi" : "Operator information"}>
      <h2>{sk ? "Prevádzkovateľ" : "Operator"}</h2>
      <table><tbody>
        <tr><th>{sk ? "Obchodné meno" : "Company name"}</th><td>{site.legalName}</td></tr>
        <tr><th>{sk ? "Sídlo / miesto podnikania" : "Registered office"}</th><td>{site.seat}</td></tr>
        <tr><th>{sk ? "IČO" : "Company ID (IČO)"}</th><td>{site.ico}</td></tr>
        <tr><th>{sk ? "DIČ" : "Tax ID (DIČ)"}</th><td>{site.dic}</td></tr>
        <tr><th>{sk ? "IČ DPH" : "VAT ID (IČ DPH)"}</th><td>{site.icDph} ({t.operator.icDphNote})</td></tr>
        <tr><th>{sk ? "Zápis v registri" : "Registration"}</th><td>{t.operator.register}</td></tr>
        <tr><th>{sk ? "Základné imanie" : "Share capital"}</th><td>{t.operator.capital}</td></tr>
        <tr><th>E-mail</th><td>{site.email}</td></tr>
        <tr><th>{sk ? "Telefón" : "Phone"}</th><td>{site.phones.join(", ")}</td></tr>
        <tr><th>{sk ? "Adresa prevádzky" : "Business premises"}</th><td>{a.place}, {a.street}, {sk ? "stánok" : "stall"} {a.stall}, {a.zip} {a.city}</td></tr>
      </tbody></table>
      <h2>{sk ? "Dozorné orgány" : "Supervisory authorities"}</h2>
      {sk ? (
        <>
          <p><b>Slovenská obchodná inšpekcia</b> – Inšpektorát SOI pre Bratislavský kraj, Bajkalská 21/A, 827 99 Bratislava, <a href="https://www.soi.sk" {...ext}>www.soi.sk</a></p>
          <p><b>Regionálny úrad verejného zdravotníctva Bratislava</b> hlavné mesto so sídlom v Bratislave, Ružinovská 8, 820 09 Bratislava, <a href="https://www.ruvzba.sk" {...ext}>www.ruvzba.sk</a></p>
        </>
      ) : (
        <>
          <p><b>Slovak Trade Inspection (Slovenská obchodná inšpekcia)</b> – SOI Inspectorate for the Bratislava Region, Bajkalská 21/A, 827 99 Bratislava, <a href="https://www.soi.sk" {...ext}>www.soi.sk</a></p>
          <p><b>Regional Public Health Authority of Bratislava (Regionálny úrad verejného zdravotníctva Bratislava)</b>, Ružinovská 8, 820 09 Bratislava, <a href="https://www.ruvzba.sk" {...ext}>www.ruvzba.sk</a></p>
        </>
      )}
      <h2>{sk ? "Alternatívne riešenie spotrebiteľských sporov" : "Alternative consumer dispute resolution"}</h2>
      {sk ? (
        <p>Ak nie si spokojný s tým, ako sme vybavili tvoju sťažnosť, alebo ak sa domnievaš, že sme porušili tvoje práva, môžeš nás najprv kontaktovať na {site.email}. Ak odpovieme zamietavo alebo do 30 dní neodpovieme, máš právo podať návrh na začatie alternatívneho riešenia sporu subjektu ARS podľa zákona č. 391/2015 Z. z. Príslušným subjektom je Slovenská obchodná inšpekcia (<a href="https://www.soi.sk" {...ext}>www.soi.sk</a>) alebo iná oprávnená právnická osoba zapísaná v zozname subjektov ARS vedenom Ministerstvom hospodárstva SR.</p>
      ) : (
        <p>If you are not satisfied with how we handled your complaint, or you believe we have infringed your rights, you can first contact us at {site.email}. If we reject your complaint or do not reply within 30 days, you have the right to file a proposal to start alternative dispute resolution with an ADR body under Slovak Act No. 391/2015 Coll. The competent body is the Slovak Trade Inspection (<a href="https://www.soi.sk" {...ext}>www.soi.sk</a>) or another authorized legal entity listed in the register of ADR bodies kept by the Ministry of Economy of the Slovak Republic.</p>
      )}
    </LegalPage>
  );
}

export function PrivacyPage({ lang }: { lang: Lang }) {
  const sk = lang === "sk";
  const cookiesPath = paths[lang].cookies as "/";
  return sk ? (
    <LegalPage title="Ochrana osobných údajov" intro="Podľa nariadenia (EÚ) 2016/679 (GDPR) a zákona č. 18/2018 Z. z. o ochrane osobných údajov. Platné od [dátum].">
      <h2>1. Kto je prevádzkovateľ</h2>
      <p>{site.legalName}, {site.seat}, IČO {site.ico}. Kontakt: {site.email}, {site.phones.join(", ")}. Zodpovednú osobu sme nevymenovali, lebo to pre nás nie je povinné.</p>
      <h2>2. Aké údaje spracúvame</h2>
      <ul>
        <li><b>Technické logy</b> – IP adresa, čas prístupu, typ prehliadača. Zaznamenáva ich hosting kvôli bezpečnosti a prevádzke webu.</li>
        <li><b>Cookies</b> – len nevyhnutné, ktoré uchovávajú tvoju voľbu súhlasu. Viac v <Link to={cookiesPath}>zásadách cookies</Link>.</li>
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
      <p>Máš právo podať sťažnosť na Úrad na ochranu osobných údajov SR, Hraničná 12, 820 07 Bratislava 27, <a href="https://dataprotection.gov.sk" {...ext}>dataprotection.gov.sk</a>.</p>
    </LegalPage>
  ) : (
    <LegalPage title="Privacy policy" intro="Under Regulation (EU) 2016/679 (GDPR) and Slovak Act No. 18/2018 Coll. on personal data protection. Effective from [date].">
      <h2>1. Who is the controller</h2>
      <p>{site.legalName}, {site.seat}, Company ID (IČO) {site.ico}. Contact: {site.email}, {site.phones.join(", ")}. We have not appointed a data protection officer because we are not required to.</p>
      <h2>2. What data we process</h2>
      <ul>
        <li><b>Technical logs</b> – IP address, access time, browser type. Our hosting provider records them for security and to operate the website.</li>
        <li><b>Cookies</b> – only strictly necessary ones, which store your consent choice. More in our <Link to={cookiesPath}>cookie policy</Link>.</li>
        <li><b>Contact</b> – if you email or call us, we process your name, email or phone number and the content of your message.</li>
      </ul>
      <p>The website has no contact form, registration or online ordering.</p>
      <h2>3. Purpose and legal basis</h2>
      <ul>
        <li>Operating and securing the website – legitimate interest (Art. 6(1)(f) GDPR).</li>
        <li>Replying to your message – legitimate interest, or steps taken before entering into a contract (Art. 6(1)(b), (f)).</li>
        <li>Optional cookies and the map – your consent (Art. 6(1)(a)).</li>
      </ul>
      <h2>4. How long we keep data</h2>
      <ul>
        <li>Technical logs – no more than [30] days.</li>
        <li>Communication – as long as needed to handle it, no more than [1 year].</li>
        <li>Cookie choice – until you change or delete it.</li>
      </ul>
      <h2>5. Recipients</h2>
      <p>Hosting provider: [name and registered office of the hosting provider]. We do not use analytics or marketing tools. If you load the map, your data is received by Google Ireland Ltd.</p>
      <h2>6. Transfers to third countries</h2>
      <p>We do not normally transfer data outside the EU/EEA. When you load the Google map, data may be transferred to the USA on the basis of the European Commission’s adequacy decision (EU-US Data Privacy Framework) or standard contractual clauses.</p>
      <h2>7. Your rights</h2>
      <ul>
        <li>the right of access to your data,</li>
        <li>the right to rectification,</li>
        <li>the right to erasure,</li>
        <li>the right to restriction of processing,</li>
        <li>the right to data portability,</li>
        <li>the right to object to processing,</li>
        <li>the right to withdraw consent at any time (without affecting the lawfulness of processing before withdrawal).</li>
      </ul>
      <p>Send your request to {site.email}. We will reply within one month.</p>
      <h2>8. Complaints</h2>
      <p>You have the right to lodge a complaint with the Office for Personal Data Protection of the Slovak Republic, Hraničná 12, 820 07 Bratislava 27, <a href="https://dataprotection.gov.sk" {...ext}>dataprotection.gov.sk</a>.</p>
    </LegalPage>
  );
}

const cookieRows = {
  sk: [
    { name: "mauna-cookie-consent", provider: "MAUNA POKE (tento web)", purpose: "Uchováva tvoju voľbu súhlasu s cookies (localStorage).", duration: "do zmazania / zmeny voľby", category: "Nevyhnutné" },
    { name: "Google Maps (NID, AEC a iné)", provider: "Google Ireland Ltd.", purpose: "Zobrazenie mapy. Nastavuje sa len ak klikneš na „Načítať mapu“.", duration: "až 6 mesiacov", category: "Tretia strana – na kliknutie" },
  ],
  en: [
    { name: "mauna-cookie-consent", provider: "MAUNA POKE (this website)", purpose: "Stores your cookie consent choice (localStorage).", duration: "until deleted / choice changed", category: "Necessary" },
    { name: "Google Maps (NID, AEC and others)", provider: "Google Ireland Ltd.", purpose: "Displays the map. Only set if you click “Load map”.", duration: "up to 6 months", category: "Third party – on click" },
  ],
};

// Ak pridáš analytiku alebo marketing, doplň ich do cookieRows (v oboch jazykoch).
export function CookiesPage({ lang }: { lang: Lang }) {
  const sk = lang === "sk";
  return (
    <LegalPage
      title={sk ? "Zásady cookies" : "Cookie policy"}
      intro={sk ? "Cookies sú malé súbory, ktoré si web ukladá v tvojom prehliadači. My ich používame čo najmenej." : "Cookies are small files that a website stores in your browser. We use as few as possible."}
    >
      <h2>{sk ? "Kategórie" : "Categories"}</h2>
      {sk ? (
        <ul>
          <li><b>Nevyhnutné</b> – potrebné na fungovanie webu, vždy zapnuté (§ 109 ods. 8 zákona č. 452/2021 Z. z. o elektronických komunikáciách).</li>
          <li><b>Analytické</b> – merali by návštevnosť. Momentálne žiadne nepoužívame. Predvolene vypnuté.</li>
          <li><b>Marketingové</b> – slúžili by na reklamu. Momentálne žiadne nepoužívame. Predvolene vypnuté.</li>
        </ul>
      ) : (
        <ul>
          <li><b>Necessary</b> – required for the website to work, always on (Section 109(8) of Slovak Act No. 452/2021 Coll. on electronic communications).</li>
          <li><b>Analytics</b> – would measure site traffic. We currently use none. Off by default.</li>
          <li><b>Marketing</b> – would be used for advertising. We currently use none. Off by default.</li>
        </ul>
      )}
      <p>{sk ? "Pred tvojím súhlasom nespúšťame žiadne skripty tretích strán. Instagram je len obyčajný odkaz, nie vložený widget." : "We do not run any third-party scripts before you consent. Instagram is just a plain link, not an embedded widget."}</p>
      <h2>{sk ? "Zoznam cookies" : "List of cookies"}</h2>
      <div className="overflow-x-auto">
        <table><thead><tr>
          {(sk ? ["Názov", "Poskytovateľ", "Účel", "Platnosť", "Kategória"] : ["Name", "Provider", "Purpose", "Duration", "Category"]).map((h) => <th key={h}>{h}</th>)}
        </tr></thead><tbody>
          {cookieRows[lang].map((c) => <tr key={c.name}><td className="font-bold">{c.name}</td><td>{c.provider}</td><td>{c.purpose}</td><td>{c.duration}</td><td>{c.category}</td></tr>)}
        </tbody></table>
      </div>
      <h2>{sk ? "Zmena súhlasu" : "Changing your consent"}</h2>
      <p>{sk ? "Súhlas môžeš kedykoľvek zmeniť alebo odvolať. Klikni na „Nastavenia cookies“ v päte webu alebo sem:" : "You can change or withdraw your consent at any time. Click “Cookie settings” in the footer or here:"}</p>
      <button onClick={openCookieSettings} className="btn-sticker bg-pink text-cocoa hover:bg-mustard">{copy[lang].footer.cookieSettings}</button>
    </LegalPage>
  );
}
