export const videoCategories = [
  "Ulıwma qaǵıydalar",
  "Kesilispe",
  "Tártipke salıwshı",
  "Temir jol belgileri",
  "Jol belgileri"
];

const videos = [
  {
    title: "Jol háreketi qaǵıydaları: ulıwma qaǵıydalar",
    description: "Jol qatnasıwshıları ushın tiykarǵı túsinikler, qáwipsiz háreket tártipleri hám ulıwma qaǵıydalar túsindirilgen video sabaq.",
    category: "Ulıwma qaǵıydalar",
    level: "Baslanǵısh",
    duration: "Sabaq",
    order: 1,
    youtubeId: "u1nE6-vD7fI",
    relatedSignIds: "STOP,YIELD,MAIN,PED,XING"
  },
  {
    title: "Tártipke salınbaǵan kesilispede háreketleniw",
    description: "Imtiyaz belgileri járdeminde tártipke salınbaǵan kesilispeden qáwipsiz ótiw hám jol beriw qaǵıydaları túsindiriledi.",
    category: "Kesilispe",
    level: "Orta",
    duration: "Sabaq",
    order: 2,
    youtubeId: "riFPNJQxLv4",
    relatedSignIds: "MAIN,YIELD,STOP"
  },
  {
    title: "Tártipke salıwshı",
    description: "Tártipke salıwshınıń isharaları, haydawshı hám jayaw júriwshi ushın beriletuǵın belgilerdi durıs túsiniw boyınsha video sabaq.",
    category: "Tártipke salıwshı",
    level: "Orta",
    duration: "Sabaq",
    order: 3,
    youtubeId: "lN55wQUxzL4",
    relatedSignIds: "STOP,YIELD,PED"
  },
  {
    title: "Shlagbaumsız temir jol kesilispesi",
    description: "Shlagbaumsız temir jol kesilispesine jaqınlasqanda abay bolıw, toqtaw hám qáwipsiz ótiw qaǵıydaları kórsetiledi.",
    category: "Temir jol belgileri",
    level: "Baslanǵısh",
    duration: "Sabaq",
    order: 4,
    youtubeId: "gPCA-uzvMKg",
    relatedSignIds: "1-2,1-3-1,1-3-2"
  },
  {
    title: "Aylanba háreket penen kesilisiw",
    description: "Aylanba háreketli kesilispede qatar tańlaw, jol beriw hám qáwipsiz burılıw tártipleri túsindiriledi.",
    category: "Kesilispe",
    level: "Orta",
    duration: "Sabaq",
    order: 5,
    youtubeId: "e92EM378Afg",
    relatedSignIds: "1-7,4-3,2-4"
  },
  {
    title: "Bir izli hám kóp izli temir jol",
    description: "Bir izli hám kóp izli temir jol kesilispeleri belgileriniń mánisi, qollanılıw ornı hám qáwipsiz háreket tártipleri túsindiriledi.",
    category: "Temir jol belgileri",
    level: "Baslanǵısh",
    duration: "Sabaq",
    order: 6,
    youtubeId: "jjpoedkfDv0",
    relatedSignIds: "1-3-1,1-3-2,1-4-1"
  }
];

export const videoLessons = videos.map((video) => ({
  ...video,
  slug: video.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, ""),
  youtubeUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
  thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
}));
