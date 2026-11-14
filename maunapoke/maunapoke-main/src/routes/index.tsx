import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { site, menu, reasons, allergens, rawFishNote, type Dish } from "@/content/site";
import { Mark } from "@/components/site/Mark";
import { Wave } from "@/components/site/Wave";
import { Reveal } from "@/components/site/Reveal";
import classic from "@/assets/poke-classic.jpg";
import mango from "@/assets/poke-mango.jpg";
import tataki from "@/assets/poke-tataki.jpg";
import spicy from "@/assets/poke-spicy.jpg";

// Fotky vymeníš nahradením súborov v src/assets (rovnaký názov).
const photos: Record<Dish["image"], string> = { classic, mango, tataki, spicy };

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: "Poke, Hawaiian",
  priceRange: "€",
  telephone: site.phone,
  address: { "@type": "PostalAddress", streetAddress: `${site.address.place}, ${site.address.stall}`, addressLocality: site.address.city, postalCode: site.address.zip, addressCountry: "SK" },
  openingHours: site.hours.map((h) => h.schema).filter(Boolean),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAUNA POKE | Poke bowls Trnavské mýto Bratislava" },
      { name: "description", content: "Čerstvý losos a tuniak, ryža, zelenina a omáčky robené u nás. Poke bistro v tržnici na Trnavskom mýte v Bratislave." },
      { property: "og:title", content: "MAUNA POKE | Poke bowls Trnavské mýto Bratislava" },
      { property: "og:description", content: "Poke, ktoré chutí ako more. Na Trnavskom mýte." },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Wave className="bg-pink text-cream" />
      <Menu />
      <Wave className="bg-cream text-cocoa" />
      <Story />
      <Wave className="bg-cocoa text-blush" />
      <Reasons />
      <Wave className="bg-blush text-cream" />
      <Location />
    </main>
  );
}

function Hero() {
  return (
    <section className="grain relative bg-pink">
      <Mark shape="volcano" className="pointer-events-none absolute -left-24 bottom-0 w-[130%] max-w-none text-cocoa/15 md:-left-10 md:w-[85%]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-6 pt-12 md:grid-cols-[1.15fr_1fr] md:pt-20">
        <div>
          <p className="inline-block -rotate-2 rounded-full border-[3px] border-cocoa bg-mustard px-4 py-1 font-bold">Tržnica Trnavské mýto</p>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[5.5rem]">Poke, ktoré chutí ako more.</h1>
          <p className="mt-6 max-w-md text-xl">Čerstvý losos a tuniak. Ryža, zelenina, omáčky robené u nás. Na Trnavskom mýte.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="btn-sticker bg-cocoa text-cream hover:bg-cocoa">Pozri menu</a>
            <a href="#kde" className="btn-sticker bg-cream text-cocoa hover:bg-mustard">Ako sa k nám dostaneš</a>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-md md:-mb-40 md:translate-x-6">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-cocoa" />
          <img src={classic} alt="Mauna Classic – poke s lososom, avokádom a edamame" width={800} height={800} fetchPriority="high" className="relative aspect-square w-full rounded-full border-[4px] border-cocoa object-cover" />
          <span className="absolute -right-2 top-4 grid size-24 rotate-12 place-items-center rounded-full border-[3px] border-cocoa bg-mustard text-center font-display text-lg leading-tight">od<br />8,90 €</span>
        </div>
      </div>
    </section>
  );
}

function Spicy({ level }: { level: Dish["spicy"] }) {
  if (!level) return null;
  return (
    <span className="ml-2 inline-flex items-center rounded-full border-2 border-cocoa bg-pink px-2 py-0.5 align-middle text-xs font-bold uppercase tracking-wider">
      {level === 1 ? "jemne pikantné" : "pikantné"}
    </span>
  );
}

function Menu() {
  return (
    <section id="menu" className="grain bg-cream pb-16 pt-16 md:pt-44">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl">Menu</h2>
          <p className="mt-3 text-lg">Štyri misky. Dve s lososom, dve s tuniakom. Viac netreba.</p>
        </div>

        {menu.map((block, bi) => (
          <div key={block.fish} className="mt-16">
            <div className={`flex items-center gap-5 border-b-[3px] border-cocoa pb-4 ${bi % 2 ? "flex-row-reverse text-right" : ""}`}>
              <Mark shape={block.fish === "losos" ? "salmon" : "tuna"} className="h-14 text-cocoa md:h-20" />
              <h3 className="text-4xl uppercase tracking-wide md:text-6xl">{block.title}</h3>
            </div>
            <div className="mt-10 space-y-14">
              {block.dishes.map((d, i) => {
                const flip = (bi + i) % 2 === 1;
                return (
                  <Reveal as="article" key={d.name} className={`group grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="relative">
                      <div className={`absolute inset-0 ${flip ? "-translate-x-4" : "translate-x-4"} translate-y-4 ${i ? "rounded-[45%_55%_40%_60%]" : "rounded-[2.5rem]"} ${bi ? "bg-mustard" : "bg-pink"}`} />
                      <img src={photos[d.image]} alt={`${d.name} – poke bowl`} loading="lazy" width={800} height={800} className={`relative aspect-[5/4] w-full border-[3px] border-cocoa object-cover transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.02] ${i ? "rounded-[45%_55%_40%_60%]" : "rounded-[2.5rem]"}`} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-4">
                        <h4 className="font-display text-3xl md:text-4xl">{d.name}</h4>
                        <span aria-hidden className="mb-2 hidden flex-1 border-b-[3px] border-dotted border-cocoa sm:block" />
                        <span className="whitespace-nowrap rounded-full bg-mustard px-3 py-1 font-display text-2xl">{d.price}</span>
                      </div>
                      <p className="mt-4 max-w-lg text-lg">{d.description}</p>
                      <p className="mt-4 text-base">
                        <span className="font-bold">Alergény:</span> {d.allergens.join(", ")}
                        <span className="sr-only"> ({d.allergens.map((a) => allergens[a - 1]).join(", ")})</span>
                        <Spicy level={d.spicy} />
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-20 grid gap-6 rounded-[2rem] border-[3px] border-cocoa bg-blush p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="font-display text-2xl">Poke si môžeš upraviť – povedz nám pri objednávke.</p>
            <p className="mt-3">Ceny sú v eurách vrátane DPH. Fotky sú ilustračné, ponuka sa môže meniť podľa dostupnosti surovín.</p>
            <p className="mt-2 font-bold">{rawFishNote}</p>
          </div>
          <Link to="/alergeny" className="btn-sticker justify-center bg-cream text-cocoa hover:bg-mustard">Zoznam alergénov</Link>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="pribeh" className="grain overflow-hidden bg-cocoa py-20 text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.2fr]">
        <Reveal className="relative order-2 md:order-1 md:-ml-24">
          <img src={tataki} alt="Tuna Tataki – opekaný tuniak s avokádom a reďkovkami" loading="lazy" width={800} height={800} className="aspect-[4/5] w-full rounded-[0_12rem_12rem_0] border-[4px] border-cream object-cover" />
        </Reveal>
        <div className="order-1 md:order-2">
          <Mark shape="volcano" className="h-12 text-pink" />
          <h2 className="mt-6 text-4xl text-pink md:text-6xl">Kúsok Havaja v bratislavskej tržnici.</h2>
          <div className="mt-6 max-w-lg space-y-4 text-lg">
            <p>Poke je jednoduché. Dobrá ryba, dobrá ryža, čerstvá zelenina. Na tom stojí celé.</p>
            <p>Surovinu vyberáme poctivo a pripravujeme ju každý deň. Ryžu varíme ráno, zeleninu krájame na mieste, omáčky miešame sami. Nič nie je z krabice.</p>
            <p>Tak sme vzali kúsok Havaja a dali ho medzi stánky so zeleninou a kvetmi. Príď sa pozrieť.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="grain bg-blush py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-6xl">Prečo Mauna</h2>
          <Mark shape="salmon" className="h-8 md:h-12" />
          <Mark shape="tuna" className="h-8 md:h-12" />
        </div>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {reasons.map((r, i) => (
            <li key={r.title} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
              <Reveal>
                <span className="block font-display text-8xl leading-none text-pink [-webkit-text-stroke:3px_var(--cocoa)]">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{r.title}</h3>
                <p className="mt-2 text-lg">{r.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Location() {
  const [mapOn, setMapOn] = useState(false);
  return (
    <section id="kde" className="grain bg-cream pb-20 pt-14">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-4xl md:text-6xl">Kde nás nájdeš</h2>
          <address className="mt-6 text-xl not-italic">
            <b>{site.address.place}</b><br />
            Stánok {site.address.stall}<br />
            {site.address.zip} {site.address.city}
          </address>
          <h3 className="mt-8 font-display text-2xl">Otvorené</h3>
          <dl className="mt-3 max-w-sm text-lg">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between border-b-2 border-dashed border-cocoa/50 py-2">
                <dt className="font-bold">{h.days}</dt><dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-sticker mt-8 bg-pink text-cocoa hover:bg-mustard">Navigovať</a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-cocoa" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[3px] border-cocoa bg-blush">
            {mapOn ? (
              <iframe title="Mapa – Tržnica Trnavské mýto" src={site.mapsEmbed} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div className="grid size-full place-items-center p-6 text-center">
                <div>
                  <div className="mx-auto grid size-28 place-items-center rounded-full border-[3px] border-cocoa bg-pink">
                    <Mark shape="volcano" className="w-20" />
                  </div>
                  <p className="mt-4 font-display text-xl">Trnavské mýto, Bratislava</p>
                  <p className="mx-auto mt-2 max-w-xs text-sm">Po načítaní mapy sa prenášajú údaje (napr. IP adresa) do Google. Mapu načítame až keď klikneš.</p>
                  <button onClick={() => setMapOn(true)} className="btn-sticker mt-4 bg-cream px-4 py-2 text-base text-cocoa">Načítať mapu</button>
                  <p className="mt-3"><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">Otvoriť v Google Maps</a></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
