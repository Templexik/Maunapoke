import { createFileRoute } from "@tanstack/react-router";
import { copy } from "@/content/copy";
import { HomePage, homeSchema } from "@/pages/Home";

const LANG = "en" as const;

export const Route = createFileRoute("/en/")({
  head: () => {
    const m = copy[LANG].meta.home;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.og },
        { property: "og:type", content: "restaurant" },
        { property: "og:locale", content: copy[LANG].ogLocale },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(homeSchema(LANG)) }],
    };
  },
  component: () => <HomePage lang={LANG} />,
});
