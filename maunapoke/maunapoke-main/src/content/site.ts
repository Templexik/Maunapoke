// Všetok obsah webu na jednom mieste – ceny, hodiny, texty, alergény, kontakty.
export const site = {
  name: "MAUNA POKE",
  legalName: "MAUNA-poke s. r. o.",
  ico: "57746575",
  dic: "2123017974",
  icDph: "SK2123017974",
  icDphNote: "platiteľ DPH podľa §4 od 20. 11. 2026",
  seat: "Rajecká 14145/40, 821 07 Bratislava – Vrakuňa",
  register: "Obchodný register Mestského súdu Bratislava III, oddiel Sro, vložka č. 201671/B",
  capital: "5 000 € (splatené v plnej výške)",
  phone: "+421 944 802 903",
  phones: ["+421 944 802 903", "+421 908 508 404"],
  email: "maunapokesro@gmail.com",
  instagram: "https://www.instagram.com/mauna.poke/",
  instagramHandle: "@mauna.poke",
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
    { days: "Po", time: "zatvorené", schema: null },
    { days: "Ut – Pi", time: "11:00 – 16:30", schema: "Tu-Fr 11:00-16:30" },
    { days: "So", time: "11:00 – 15:00", schema: "Sa 11:00-15:00" },
    { days: "Ne", time: "zatvorené", schema: null },
  ],
  price: "14,50 €",
  portion: "500 g",
};

export type Dish = {
  number: string;
  name: string;
  description: string;
  allergens: number[];
  spicy: 0 | 1 | 2 | 3;
  image: "classic" | "mango" | "tataki" | "spicy";
};

export const menu: { fish: "losos" | "tuniak"; title: string; dishes: Dish[] }[] = [
  {
    fish: "losos",
    title: "Losos",
    dishes: [
      {
        number: "01",
        name: "Mango Tropical",
        description: "Marinovaný losos, sushi ryža a tropické mango.",
        allergens: [1, 2, 3, 4, 6, 10],
        spicy: 0,
        image: "mango",
      },
      {
        number: "02",
        name: "Dark Shoyu",
        description: "Losos marinovaný v tmavej sójovej omáčke, podávaný na sushi ryži.",
        allergens: [1, 4, 6, 11, 14],
        spicy: 0,
        image: "classic",
      },
    ],
  },
  {
    fish: "tuniak",
    title: "Tuniak",
    dishes: [
      {
        number: "03",
        name: "Hot Passion",
        description: "Marinovaný tuniak s pikantnou omáčkou na sushi ryži.",
        allergens: [1, 3, 4, 6, 10, 11],
        spicy: 1,
        image: "spicy",
      },
      {
        number: "04",
        name: "Mauna Original",
        description: "Naša klasika: tuniak marinovaný v sójovej omáčke, podávaný na sushi ryži.",
        allergens: [4, 6],
        spicy: 0,
        image: "tataki",
      },
    ],
  },
];

export const fishInfo = {
  losos: {
    title: "Losos",
    points: [
      "Bez antibiotík a hormónov, krmivo bez GMO.",
      "Pre-rigor: filetovanie do 3 hodín po love, ešte pred posmrtným stuhnutím.",
    ],
    certsTitle: "Certifikáty",
    certs: [
      { name: "BAP ★★★★", text: "Najvyššia úroveň certifikácie. Pokrýva odchov, farmu, krmivo a spracovanie." },
      { name: "GLOBALG.A.P.", text: "Overuje dodržiavanie pravidiel správnej praxe v chove rýb." },
    ],
  },
  tuniak: {
    title: "Tuniak",
    points: [
      "Kvalita „Super Sashimi 3A“ (AAA).",
      "Pevná svalovina.",
      "Výrazná červená farba mäsa.",
      "Oblasť lovu: Indický oceán.",
    ],
  },
};

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
