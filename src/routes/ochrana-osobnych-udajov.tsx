import { createFileRoute } from "@tanstack/react-router";
import { copy } from "@/content/copy";
import { PrivacyPage } from "@/pages/Legal";

const LANG = "sk" as const;

export const Route = createFileRoute("/ochrana-osobnych-udajov")({
  head: () => {
    const m = copy[LANG].meta.privacy;
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
  component: () => <PrivacyPage lang={LANG} />,
});
