import { createFileRoute } from "@tanstack/react-router";
import { allergens, allergenNote, rawFishNote, menu } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/alergeny")({
  head: () => ({ meta: [
    { title: "Alergény | MAUNA POKE" },
    { name: "description", content: "Zoznam 14 alergénov a alergény v jednotlivých poke bowloch MAUNA POKE." },
    { property: "og:title", content: "Alergény | MAUNA POKE" },
    { property: "og:description", content: "Zoznam alergénov podľa nariadenia EÚ č. 1169/2011." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: () => (
    <LegalPage title="Alergény" intro="Podľa nariadenia (EÚ) č. 1169/2011 o poskytovaní informácií o potravinách spotrebiteľom.">
      <p className="rounded-xl border-[3px] border-cocoa bg-mustard p-4 font-bold">{rawFishNote}</p>
      <h2>Alergény v našich miskách</h2>
      <table><thead><tr><th>Poke</th><th>Alergény</th></tr></thead><tbody>
        {menu.flatMap((b) => b.dishes).map((d) => (
          <tr key={d.name}><td className="font-bold">{d.name}</td><td>{d.allergens.map((a) => `${a} ${allergens[a - 1]}`).join(", ")}</td></tr>
        ))}
      </tbody></table>
      <h2>Zoznam 14 alergénov</h2>
      <ol className="grid gap-2 sm:grid-cols-2">
        {allergens.map((a, i) => (
          <li key={a} className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-cocoa bg-pink font-bold">{i + 1}</span>{a}</li>
        ))}
      </ol>
      <h2>Dôležité</h2>
      <p>{allergenNote}</p>
    </LegalPage>
  ),
});
