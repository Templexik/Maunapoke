import type { ReactNode } from "react";
import { Mark } from "./Mark";

export function LegalPage({ title, intro, children }: { title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <main>
      <section className="grain bg-pink px-5 pb-14 pt-14">
        <div className="mx-auto max-w-3xl">
          <Mark shape="salmon" className="h-10 text-cocoa" />
          <h1 className="mt-4 text-4xl md:text-6xl">{title}</h1>
          {intro && <div className="mt-4 max-w-2xl text-lg">{intro}</div>}
        </div>
      </section>
      <article className="legal mx-auto max-w-3xl px-5 py-14 [&_a]:font-bold [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl md:[&_h2]:text-3xl [&_li]:mb-1 [&_p]:mb-4 [&_table]:w-full [&_td]:border-2 [&_td]:p-3 [&_th]:border-2 [&_th]:bg-blush [&_th]:p-3 [&_th]:text-left [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </article>
    </main>
  );
}
