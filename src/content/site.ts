// Údaje webu, ktoré sú rovnaké v oboch jazykoch – firma, kontakty, hodiny, jedlá (alergény, fotky).
// Texty (SK aj EN) sú v src/content/copy.ts.
export const site = {
  name: "MAUNA POKE",
  legalName: "MAUNA-poke s. r. o.",
  ico: "57746575",
  dic: "2123017974",
  icDph: "SK2123017974",
  seat: "Rajecká 14145/40, 821 07 Bratislava – Vrakuňa",
  phone: "+421 944 802 903",
  phones: ["+421 944 802 903", "+421 908 508 404"],
  email: "maunapokesro@gmail.com",
  instagram: "https://www.instagram.com/mauna.poke/",
  instagramHandle: "@mauna.poke",
  address: {
    place: "Nová tržnica",
    stall: "[presné číslo stánku]",
    street: "Trnavské mýto",
    city: "Bratislava",
    zip: "831 04",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tr%C5%BEnica+Trnavsk%C3%A9+m%C3%BDto+Bratislava",
  mapsEmbed: "https://www.google.com/maps?q=Tr%C5%BEnica+Trnavsk%C3%A9+m%C3%BDto+Bratislava&output=embed",
  // key = kľúč do copy.days; time = null → zatvorené
  hours: [
    { key: "mon", time: null, schema: null },
    { key: "tuefri", time: "11:00 – 16:30", schema: "Tu-Fr 11:00-16:30" },
    { key: "sat", time: "11:00 – 15:00", schema: "Sa 11:00-15:00" },
    { key: "sun", time: null, schema: null },
  ] as { key: "mon" | "tuefri" | "sat" | "sun"; time: string | null; schema: string | null }[],
  portion: "500 g",
};

export type Dish = {
  number: 1 | 2 | 3 | 4;
  name: string;
  allergens: number[];
  spicy: 0 | 1 | 2 | 3;
  image: "classic" | "mango" | "tataki" | "spicy";
};

export const menu: { fish: "salmon" | "tuna"; dishes: Dish[] }[] = [
  {
    fish: "salmon",
    dishes: [
      { number: 1, name: "Mango Tropical", allergens: [1, 2, 3, 4, 6, 10], spicy: 0, image: "mango" },
      { number: 2, name: "Dark Shoyu", allergens: [1, 4, 6, 11, 14], spicy: 0, image: "classic" },
    ],
  },
  {
    fish: "tuna",
    dishes: [
      { number: 3, name: "Hot Passion", allergens: [1, 3, 4, 6, 10, 11], spicy: 1, image: "spicy" },
      { number: 4, name: "MAUNA Original", allergens: [4, 6], spicy: 0, image: "tataki" },
    ],
  },
];
