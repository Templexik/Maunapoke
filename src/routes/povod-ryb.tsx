import { createFileRoute } from "@tanstack/react-router";
import { copy } from "@/content/copy";
import { OriginPage } from "@/pages/Origin";

const LANG = "sk" as const;

export const Route = createFileRoute("/povod-ryb")({
  head: () => {
    const m = copy[LANG].meta.origin;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.og },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: copy[LANG].ogLocale },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: () => <OriginPage lang={LANG} />,
});
