import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site, menu, type Dish } from "@/content/site";
import { copy } from "@/content/copy";
import { paths, type Lang } from "@/lib/i18n";
import { rich } from "@/lib/rich";
import { Mark } from "@/components/site/Mark";
import { Wave } from "@/components/site/Wave";
import { Reveal } from "@/components/site/Reveal";
import hotPassion from "@/assets/poke-hot-passion.webp";
import darkShoyu from "@/assets/poke-dark-shoyu.webp";
import mauna from "@/assets/poke-mauna.webp";
import tropical from "@/assets/poke-tropical.webp";
import mixPhoto from "@/assets/poke-mix.webp";

// Fotky vymeníš nahradením súborov v src/assets (rovnaký názov).
const photos: Record<Dish["image"], string> = { classic: darkShoyu, mango: tropical, tataki: mauna, spicy: hotPassion };

export function homeSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    servesCuisine: "Poke, Hawaiian",
    priceRange: "€",
    inLanguage: lang,
    telephone: site.phones,
    address: { "@type": "PostalAddress", streetAddress: `${site.address.place}, ${site.address.street}`, addressLocality: site.address.city, postalCode: site.address.zip, addressCountry: "SK" },
    openingHours: site.hours.map((h) => h.schema).filter(Boolean),
  };
}

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <main>
      <Hero lang={lang} />
      <Wave className="bg-pink text-cream" />
      <Menu lang={lang} />
      <Wave className="bg-cream text-cocoa" />
      <Story lang={lang} />
      <Wave className="bg-cocoa text-blush" />
      <Reasons lang={lang} />
      <Wave className="bg-blush text-mustard" />
      <About lang={lang} />
      <Wave className="bg-mustard text-cream" />
      <Location lang={lang} />
    </main>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="grain relative bg-pink">
      <Mark shape="volcano" className="pointer-events-none absolute -left-24 bottom-0 w-[130%] max-w-none text-cocoa/15 md:-left-10 md:w-[85%]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-6 pt-12 md:grid-cols-[1.15fr_1fr] md:pt-20">
        <div>
          <p className="inline-block border-[3px] border-cocoa bg-mustard px-4 py-1.5 font-bold">{t.hero.badge}</p>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[5.5rem]">{t.hero.title}</h1>
          <p className="mt-6 max-w-lg font-hand text-3xl leading-snug sm:text-4xl">{t.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="btn-sticker bg-cocoa text-cream hover:bg-cocoa">{t.hero.seeMenu}</a>
            <a href="#kde" className="btn-sticker bg-cream text-cocoa hover:bg-mustard">{t.hero.findUs}</a>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-md md:-mb-40 md:translate-x-6">
          <img src={mauna} alt={t.hero.imgAlt} width={1100} height={928} fetchPriority="high" className="relative w-full object-contain drop-shadow-2xl" />
          <span className="absolute -right-2 top-4 grid size-24 rotate-12 place-items-center rounded-full border-[3px] border-cocoa bg-mustard text-center font-display text-lg leading-tight">{t.price}<br /><span className="text-sm">{site.portion}</span></span>
        </div>
      </div>
    </section>
  );
}

function Chili({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`size-5 ${on ? "text-cocoa" : "text-cocoa/25"}`} aria-hidden fill="currentColor">
      <path d="M17.5 3.5c.8-.6 1.9-.4 2.4.4.5.8.2 1.8-.6 2.3-.3.2-.6.3-.9.3 0 6.9-5.4 13.5-13.6 14.2-.9.1-1.1-.9-.4-1.3C10 17 11.800 12.400 12.200 8.300c.1-1 .7-1.800 1.600-2.100l2-.7c.3-.9.9-1.5 1.700-2z" />
    </svg>
  );
}

function Spicy({ level, lang }: { level: Dish["spicy"]; lang: Lang }) {
  const t = copy[lang].menu;
  if (!level) return null;
  return (
    <span className="ml-2 inline-flex items-center gap-1 rounded-full border-2 border-cocoa bg-pink px-2 py-0.5 align-middle text-xs font-bold uppercase tracking-wider">
      {t.spicy}
      <span className="inline-flex" role="img" aria-label={t.spicyLabel(level)}>
        {[1, 2, 3].map((n) => <Chili key={n} on={n <= level} />)}
      </span>
      <span aria-hidden>{level}/3</span>
    </span>
  );
}

function Menu({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const m = t.menu;
  return (
    <section id="menu" className="grain bg-cream pb-16 pt-16 md:pt-44">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl">{m.title}</h2>
          <p className="mt-3 font-display text-2xl md:text-3xl">{m.subtitle}</p>
        </div>

        <div className="mt-8 grid place-items-center rounded-[2rem] border-[3px] border-cocoa bg-mustard px-6 py-6 md:py-8">
          <p className="text-center font-display text-5xl md:text-6xl">{t.price}</p>
        </div>
        <p className="mt-5 max-w-2xl text-lg">{rich(m.intro)}</p>

        {menu.map((block, bi) => {
          const numColor = bi ? "text-turquoise" : "text-pink";
          return (
            <div key={block.fish} className="mt-16">
              <div className={`flex items-center gap-4 border-b-[3px] border-cocoa pb-4 ${bi % 2 ? "flex-row-reverse text-right" : ""}`}>
                <Mark shape={block.fish === "salmon" ? "salmon" : "tuna"} className="h-7 text-cocoa md:h-10" />
                <h3 className="text-4xl uppercase tracking-wide md:text-6xl">{m.fish[block.fish]}</h3>
              </div>
              <div className="mt-10 space-y-14">
                {block.dishes.map((d, i) => {
                  const flip = (bi + i) % 2 === 1;
                  return (
                    <Reveal as="article" key={d.name} className={`group grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                      <div className="relative">
                        <img src={photos[d.image]} alt={`${d.name} – ${m.dishAlt}`} loading="lazy" width={800} height={800} className="relative aspect-[5/4] w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.02]" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-4">
                          <span className={`font-display text-3xl [-webkit-text-stroke:2px_var(--cocoa)] md:text-4xl ${numColor}`}>{d.number}.</span>
                          <h4 className="font-display text-3xl md:text-4xl">{d.name}</h4>
                        </div>
                        <p className="mt-4 max-w-lg text-lg">{t.dishes[d.number]}</p>
                        <p className="mt-4 text-base">
                          <span className="font-bold">{m.allergens}</span> {d.allergens.join(", ")}
                          <span className="sr-only"> ({d.allergens.map((a) => t.allergens[a - 1]).join(", ")})</span>
                          <Spicy level={d.spicy} lang={lang} />
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}


        <Reveal as="article" className="group mt-16 grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img src={mixPhoto} alt={`${m.mixTitle} – ${m.dishAlt}`} loading="lazy" width={800} height={800} className="relative aspect-[5/4] w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.02]" />
          </div>
          <div>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-3xl text-mustard [-webkit-text-stroke:2px_var(--cocoa)] md:text-4xl">5.</span>
              <h4 className="font-display text-3xl md:text-4xl">{m.mixTitle}</h4>
            </div>
            <p className="mt-4 max-w-lg text-lg">{m.mixText}</p>
            <div className="mt-4 flex items-center gap-3">
              <Mark shape="salmon" className="h-7 text-cocoa" />
              <Mark shape="tuna" className="h-7 text-cocoa" />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border-[3px] border-cocoa bg-pink p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Mark shape="salmon" className="h-6 text-cocoa" />
              <h3 className="font-display text-3xl uppercase">{m.fish.salmon}</h3>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg">
              {t.fishInfo.salmon.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <h4 className="mt-6 font-display text-xl uppercase">{t.fishInfo.salmon.certsTitle}</h4>
            <ul className="mt-2 space-y-3">
              {t.fishInfo.salmon.certs.map((c) => (
                <li key={c.name}><b>{c.name}</b><br />{c.text}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border-[3px] border-cocoa bg-turquoise p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Mark shape="tuna" className="h-6 text-cocoa" />
              <h3 className="font-display text-3xl uppercase">{m.fish.tuna}</h3>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg">
              {t.fishInfo.tuna.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>

        <p className="mt-8 rounded-[1.5rem] border-[3px] border-cocoa bg-blush p-5 text-center text-lg font-bold md:p-6">{m.raw}</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold">{m.vat}</p>
          </div>
          <Link to={paths[lang].allergens as "/"} className="btn-sticker justify-center bg-cream text-cocoa hover:bg-mustard">{m.allergenList}</Link>
        </div>
      </div>
    </section>
  );
}

function Story({ lang }: { lang: Lang }) {
  const s = copy[lang].story;
  return (
    <section id="pribeh" className="grain overflow-hidden bg-cocoa py-20 text-cream">
      <div className="mx-auto max-w-3xl px-5">
        <div>
          <Mark shape="volcano" className="h-12 text-pink" />
          <h2 className="mt-6 text-4xl text-pink md:text-6xl">{s.title}</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg">
            <p>{rich(s.intro)}</p>
            {s.points.map((p) => <p key={p}>{rich(p)}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reasons({ lang }: { lang: Lang }) {
  const w = copy[lang].why;
  return (
    <section className="grain bg-blush py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-6xl">{w.title}</h2>
          <Mark shape="salmon" className="h-8 md:h-12" />
          <Mark shape="tuna" className="h-8 md:h-12" />
        </div>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {w.items.map((r, i) => (
            <li key={r.title} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
              <Reveal>
                <span className="block font-display text-8xl leading-none text-pink [-webkit-text-stroke:3px_var(--cocoa)]">{i + 1}</span>
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

function About({ lang }: { lang: Lang }) {
  const a = copy[lang].about;
  return (
    <section id="o-nas" className="grain bg-mustard py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex items-center gap-8 md:gap-14">
          <h2 className="text-4xl md:text-6xl">{a.title}</h2>
          <Mark shape="couple" className="h-9 text-cocoa md:h-14" />
        </div>
        <div className="mt-8 space-y-5 text-lg">
          {a.paragraphs.map((p) => <p key={p}>{rich(p)}</p>)}
        </div>
      </div>
    </section>
  );
}

function Location({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const w = t.where;
  const [mapOn, setMapOn] = useState(false);
  return (
    <section id="kde" className="grain bg-cream pb-20 pt-14">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-4xl md:text-6xl">{w.title}</h2>
          <h3 className="mt-6 font-display text-2xl">{w.open}</h3>
          <dl className="mt-3 max-w-sm text-lg">
            {site.hours.map((h) => (
              <div key={h.key} className="flex justify-between border-b-2 border-dashed border-cocoa/50 py-2">
                <dt className="font-bold">{t.days[h.key]}</dt><dd>{h.time ?? t.closed}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-8 font-display text-2xl">{w.address}</h3>
          <address className="mt-3 text-xl not-italic">
            <b>{site.address.place}</b>, {site.address.street}<br />
            {site.address.zip} {site.address.city}<br />
            <span className="mt-1 inline-block rounded-full border-2 border-cocoa bg-turquoise px-3 py-0.5 text-base font-bold">{w.zone}</span>
          </address>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-sticker mt-8 bg-pink text-cocoa hover:bg-mustard">{w.navigate}</a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-cocoa" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[3px] border-cocoa bg-blush">
            {mapOn ? (
              <iframe title={w.mapTitle} src={site.mapsEmbed} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div className="grid size-full place-items-center p-6 text-center">
                <div>
                  <div className="mx-auto grid size-28 place-items-center rounded-full border-[3px] border-cocoa bg-pink">
                    <Mark shape="volcano" className="w-20" />
                  </div>
                  <p className="mt-4 font-display text-xl">{w.mapCaption}</p>
                  <p className="mx-auto mt-2 max-w-xs text-sm">{w.mapPrivacy}</p>
                  <button onClick={() => setMapOn(true)} className="btn-sticker mt-4 bg-cream px-4 py-2 text-base text-cocoa hover:bg-mustard">{w.loadMap}</button>
                  <p className="mt-3"><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">{w.openMaps}</a></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
