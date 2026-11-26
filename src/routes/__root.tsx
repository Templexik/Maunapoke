import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { copy } from "@/content/copy";
import { paths, useLang } from "@/lib/i18n";

function NotFoundComponent() {
  const lang = useLang();
  const t = copy[lang].notFound;
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.text}
        </p>
        <div className="mt-6">
          <Link
            to={paths[lang].home as "/"}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  const lang = useLang();
  const e = lang === "en"
    ? { title: "The page failed to load", text: "Something went wrong on our side. Try refreshing the page or going back to the start.", retry: "Try again" }
    : { title: "Stránka sa nenačítala", text: "Niečo sa pokazilo na našej strane. Skús stránku obnoviť alebo sa vrátiť na úvod.", retry: "Skúsiť znova" };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {e.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {e.text}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {e.retry}
          </button>
          <a
            href={paths[lang].home}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {copy[lang].notFound.back}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MAUNA POKE | Poke bowls Trnavské mýto Bratislava" },
      { name: "description", content: "Poke z čerstvého lososa a tuniaka v tržnici na Trnavskom mýte v Bratislave." },
      { property: "og:title", content: "MAUNA POKE" },
      { property: "og:description", content: "Poke z čerstvého lososa a tuniaka na Trnavskom mýte." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sk_SK" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const lang = useLang();
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const lang = useLang();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#obsah" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-mustard focus:p-3">{copy[lang].skip}</a>
      <Header />
      <div id="obsah"><Outlet /></div>
      <Footer />
      <CookieBanner />
    </QueryClientProvider>
  );
}
