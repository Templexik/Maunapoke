import { createFileRoute } from "@tanstack/react-router";
import { copy } from "@/content/copy";
import { OperatorPage } from "@/pages/Legal";

const LANG = "en" as const;

export const Route = createFileRoute("/en/operator")({
  head: () => {
    const m = copy[LANG].meta.operator;
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
  component: () => <OperatorPage lang={LANG} />,
});
