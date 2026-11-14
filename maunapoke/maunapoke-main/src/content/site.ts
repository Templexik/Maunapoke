// Všetok obsah webu na jednom mieste – ceny, hodiny, texty, alergény, kontakty.
export const site = {
  name: "MAUNA POKE",
  legalName: "[Obchodné meno]",
  ico: "[IČO]",
  dic: "[DIČ]",
  icDph: "[IČ DPH – ak ste platca]",
  seat: "[Sídlo / miesto podnikania]",
  register: "[Zapísaný v Živnostenskom registri Okresného úradu ..., č. ...]",
  phone: "[+421 900 000 000]",
  email: "[ahoj@maunapoke.sk]",
  instagram: "https://instagram.com/[profil]",
  facebook: "https://facebook.com/[profil]",
  address: {
    place: "Tržnica Trnavské mýto",
    stall: "[presné číslo stánku]",
    street: "Trnavské mýto",
    city: "Bratislava",
    zip: "831 04",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tr%C5%BEnica+Trnavsk%C3%A9+m%C3%BDto+Bratislava",
  mapsEmbed: "https://www.google.com/maps?q=Tr%C5%BEnica+Trnavsk%C3%A9+m%C3%BDto+Bratislava&output=embed",
  hours: [
    { days: "Po – Pi", time: "10:30 – 19:00", schema: "Mo-Fr 10:30-19:00" },
    { days: "So", time: "10:30 – 16:00", schema: "Sa 10:30-16:00" },
    { days: "Ne", time: "zatvorené", schema: null },
  ],
};

export type Dish = {
  name: string;
  price: string;
  description: string;
  allergens: number[];
  spicy: 0 | 1 | 2;
  image: "classic" | "mango" | "tataki" | "spicy";
};

export const menu: { fish: "losos" | "tuniak"; title: string; dishes: Dish[] }[] = [
  {
    fish: "losos",
    title: "Losos",
    dishes: [
      {
        name: "Mauna Classic",
        price: "8,90 €",
        description:
          "Čerstvý losos marinovaný v sójovej omáčke a sezame, sushi ryža, avokádo, uhorka, edamame, nakladaný zázvor, wakame, sezam, jemná sójovo-sezamová zálievka.",
        allergens: [1, 4, 6, 11],
        spicy: 0,
        image: "classic",
      },
      {
        name: "Losos Mango",
        price: "9,50 €",
        description:
          "Losos, ryža, čerstvé mango, uhorka, červená kapusta, pražená cibuľka, limetka, mango-chilli omáčka.",
        allergens: [1, 4, 6],
        spicy: 1,
        image: "mango",
      },
    ],
  },
  {
    fish: "tuniak",
    title: "Tuniak",
    dishes: [
      {
        name: "Tuna Tataki",
        price: "10,50 €",
        description:
          "Tuniak opekaný zvonka, vnútri ružový, sushi ryža, avokádo, reďkovky, mrkva, edamame, wakame, ponzu omáčka, sezam.",
        allergens: [1, 4, 6, 11],
        spicy: 0,
        image: "tataki",
      },
      {
        name: "Tuna Spicy",
        price: "10,90 €",
        description:
          "Kocky tuniaka v pikantnej sriracha-majonéze, ryža, uhorka, avokádo, nori, jarná cibuľka, čierny sezam, chrumkavá cibuľka.",
        allergens: [1, 3, 4, 11],
        spicy: 2,
        image: "spicy",
      },
    ],
  },
];

export const allergens = [
  "Obilniny obsahujúce lepok",
  "Kôrovce",
  "Vajcia",
  "Ryby",
  "Arašidy",
  "Sójové zrná",
  "Mlieko",
  "Orechy",
  "Zeler",
  "Horčica",
  "Sezamové semená",
  "Oxid siričitý a siričitany",
  "Vlčí bôb",
  "Mäkkýše",
];

export const allergenNote =
  "Údaje o alergénoch sú orientačné. Jedlá pripravujeme v prevádzke, kde sa spracúvajú všetky uvedené alergény, preto nemožno úplne vylúčiť skrížený kontakt. V prípade alergie alebo intolerancie sa informuj u obsluhy pred objednávkou.";
export const rawFishNote =
  "Poke obsahuje surovú rybu. Nie je vhodné pre tehotné ženy, malé deti, seniorov a osoby s oslabenou imunitou.";

export const reasons = [
  { title: "Čerstvá ryba každý deň", text: "Lososa a tuniaka berieme každé ráno. Čo sa nepredá, nejde ďalší deň do misky." },
  { title: "Omáčky robíme sami", text: "Sójovo-sezamovú, mango-chilli aj ponzu miešame u nás. Žiadne fľaše z veľkoskladu." },
  { title: "Rýchlo, bez čakania", text: "Objednáš, chvíľku počkáš a ideš. Ideálne na obed medzi nákupom na tržnici." },
];
