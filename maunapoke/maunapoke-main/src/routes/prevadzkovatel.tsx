import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/prevadzkovatel")({
  head: () => ({ meta: [
    { title: "Informácie o prevádzkovateľovi | MAUNA POKE" },
    { name: "description", content: "Identifikačné údaje prevádzkovateľa MAUNA POKE, dozorné orgány a riešenie sporov." },
    { property: "og:title", content: "Informácie o prevádzkovateľovi | MAUNA POKE" },
    { property: "og:description", content: "Kto prevádzkuje MAUNA POKE a ako nás kontaktovať." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: () => (
    <LegalPage title="Informácie o prevádzkovateľovi">
      <h2>Prevádzkovateľ</h2>
      <table><tbody>
        <tr><th>Obchodné meno / meno a priezvisko</th><td>{site.legalName}</td></tr>
        <tr><th>Sídlo / miesto podnikania</th><td>{site.seat}</td></tr>
        <tr><th>IČO</th><td>{site.ico}</td></tr>
        <tr><th>DIČ</th><td>{site.dic}</td></tr>
        <tr><th>IČ DPH</th><td>{site.icDph}</td></tr>
        <tr><th>Zápis v registri</th><td>{site.register}</td></tr>
        <tr><th>E-mail</th><td>{site.email}</td></tr>
        <tr><th>Telefón</th><td>{site.phone}</td></tr>
        <tr><th>Adresa prevádzky</th><td>{site.address.place}, stánok {site.address.stall}, {site.address.zip} {site.address.city}</td></tr>
      </tbody></table>
      <h2>Dozorné orgány</h2>
      <p><b>Slovenská obchodná inšpekcia</b> – Inšpektorát SOI pre Bratislavský kraj, Bajkalská 21/A, 827 99 Bratislava, <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer">www.soi.sk</a></p>
      <p><b>Regionálny úrad verejného zdravotníctva Bratislava</b> hlavné mesto so sídlom v Bratislave, Ružinovská 8, 820 09 Bratislava, <a href="https://www.ruvzba.sk" target="_blank" rel="noopener noreferrer">www.ruvzba.sk</a></p>
      <h2>Alternatívne riešenie spotrebiteľských sporov</h2>
      <p>Ak nie si spokojný s tým, ako sme vybavili tvoju sťažnosť, alebo ak sa domnievaš, že sme porušili tvoje práva, môžeš nás najprv kontaktovať na {site.email}. Ak odpovieme zamietavo alebo do 30 dní neodpovieme, máš právo podať návrh na začatie alternatívneho riešenia sporu subjektu ARS podľa zákona č. 391/2015 Z. z. Príslušným subjektom je Slovenská obchodná inšpekcia (<a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer">www.soi.sk</a>) alebo iná oprávnená právnická osoba zapísaná v zozname subjektov ARS vedenom Ministerstvom hospodárstva SR.</p>
    </LegalPage>
  ),
});
