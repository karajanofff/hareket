export const videoCategories = [
  "Svetofor",
  "Jol belgileri",
  "Jayaú júrginshi",
  "Kesilispe",
  "Tezlik hám aralıq",
  "Qáwipsiz háreket"
];

export const videoLessons = [
  ["Jol háreketi qaǵıydalarınıń áhmiyeti", "Jol qatnasında tártip hám qáwipsizliktiń bas principleri.", "Qáwipsiz háreket", "Baslanǵısh", "08:20", 1],
  ["Svetofor signalları", "Svetofor signalları hám qosımsha sekciyalardı grafikalıq túsindiriw.", "Svetofor", "Baslanǵısh", "10:05", 2],
  ["Jol belgileriniń túrleri", "Belgilerdi forma, reń hám mazmun boyınsha ajıratıw.", "Jol belgileri", "Baslanǵısh", "09:40", 3],
  ["Eskertiwshi belgiler", "Qáwipli burılıs, mektep aymaǵı hám jayaú ótpe belgileri.", "Jol belgileri", "Orta", "07:55", 4],
  ["Tıyım salıwshı belgiler", "Kirisiwge tıyım, toqtawǵa tıyım hám tezlik shegaraları.", "Jol belgileri", "Orta", "11:10", 5],
  ["Buyırıwshı belgiler", "Baǵıt, aylanba háreket hám arnawlı jolақ belgileri.", "Jol belgileri", "Orta", "08:45", 6],
  ["Jayaú júrginshiler ushın qaǵıydalar", "Jayaúlar ushın ótpe jol, svetofor hám kóriniw qaǵıydaları.", "Jayaú júrginshi", "Baslanǵısh", "09:15", 7],
  ["Kesilispe hám ustunlıq qaǵıydaları", "Bas jol, ońnan keliwshi transport hám belgiler boyınsha ustunlıq.", "Kesilispe", "Joqarı", "12:00", 8],
  ["STOP hám Jol beriw belgileri", "Toqtaw nıqabı, jol beriw minneti hám real holatlar.", "Kesilispe", "Orta", "06:50", 9],
  ["Tezlik shegarası", "Tezlik belgileri hám jaǵdayǵa sáykes háreket etiў.", "Tezlik hám aralıq", "Orta", "08:30", 10],
  ["Qáwipsiz aralıq", "Tormoz jolı, reakciya waqtı hám aralıqtı saqlaw.", "Tezlik hám aralıq", "Joqarı", "10:25", 11],
  ["Testke tayarlıq", "Negizgi belgiler, signal hám test strategiyası.", "Qáwipsiz háreket", "Tákrarlaw", "13:15", 12]
].map(([title, description, category, level, duration, order], index) => {
  const ids = ["M88AhQjtXWU", "jl-ifANP4ng", "nzVmmp-Hvpo", "aqz-KE-bpKQ", "M7lc1UVf-VE", "e-ORhEE9VVg"];
  const youtubeId = ids[index % ids.length];
  return {
    title: String(title),
    slug: String(title).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
    description: String(description),
    youtubeUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
    youtubeId,
    thumbnailUrl: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
    category: String(category),
    level: String(level),
    duration: String(duration),
    order: Number(order),
    relatedSignIds: index < 4 ? "STOP,YIELD,PED,XING,SPEED50" : "NOENTRY,NOPARK,MAIN,CHILDREN,PARK"
  };
});
