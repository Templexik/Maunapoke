import { copy } from "@/content/copy";
import type { Lang } from "@/lib/i18n";
import { Mark } from "@/components/site/Mark";
import { Reveal } from "@/components/site/Reveal";

// PDF a náhľady stránok sú v public/povod-ryb. Súbory vymeníš s rovnakým názvom.
const docs = [
  { key: "salmon", pdf: "/povod-ryb/hiddenfjord-losos.pdf", pages: ["/povod-ryb/hiddenfjord-1.jpg", "/povod-ryb/hiddenfjord-2.jpg"], bg: "bg-pink", mark: "salmon" },
  { key: "tuna", pdf: "/povod-ryb/yellowfin-tuniak.pdf", pages: ["/povod-ryb/yellowfin-1.jpg", "/povod-ryb/yellowfin-2.jpg"], bg: "bg-turquoise", mark: "tuna" },
] as const;

export function OriginPage({ lang }: { lang: Lang }) {
  const o = copy[lang].origin;
  return (
    <main>
      <section className="grain bg-pink px-5 pb-14 pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <Mark shape="salmon" className="h-10 text-cocoa" />
            <Mark shape="tuna" className="h-10 text-cocoa" />
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl">{o.title}</h1>
          <p className="mt-4 max-w-2xl text-lg">{o.intro}</p>
        </div>
      </section>
      <section className="grain bg-cream py-16">
        <div className="mx-auto max-w-6xl space-y-20 px-5">
          {docs.map((d) => {
            const info = o[d.key];
            return (
              <div key={d.key}>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-cocoa pb-4">
                  <div className="flex items-center gap-4">
                    <Mark shape={d.mark} className="h-8 text-cocoa md:h-10" />
                    <div>
                      <h2 className="text-3xl md:text-5xl">{info.name}</h2>
                      <p className="mt-1 font-display text-xl">{info.sub}</p>
                    </div>
                  </div>
                  <a href={d.pdf} target="_blank" rel="noopener noreferrer" download className="btn-sticker bg-mustard text-cocoa hover:bg-pink">{o.download}</a>
                </div>
                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  {d.pages.map((src, i) => (
                    <Reveal key={src} className="relative">
                      <div className={`absolute inset-0 translate-x-3 translate-y-3 rounded-[1.5rem] ${d.bg}`} />
                      <a href={d.pdf} target="_blank" rel="noopener noreferrer" className="relative block">
                        <img src={src} alt={`${info.alt} ${i + 1}`} loading="lazy" className="w-full rounded-[1.5rem] border-[3px] border-cocoa object-cover" />
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
