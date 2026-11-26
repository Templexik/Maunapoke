# MAUNA POKE

Web poke bistra MAUNA POKE – tržnica Trnavské mýto, Bratislava.

Web je dvojjazyčný (SK `/`, EN `/en`). Prepínač SK | EN je vpravo hore v hlavičke.

- Texty (SK aj EN) sú v `src/content/copy.ts` – pri úprave zmeň oba jazyky.
- Údaje, ktoré sú v oboch jazykoch rovnaké (firma, kontakty, hodiny, jedlá a ich alergény), sú v `src/content/site.ts`.
- Dlhé právne texty (alergény, prevádzkovateľ, ochrana údajov, cookies) sú v `src/pages/Legal.tsx`.
- Adresy stránok v oboch jazykoch sú v `src/lib/i18n.ts` a `src/routes`.

## Vývoj

```sh
bun install
bun run dev
```

Build: `bun run build`
