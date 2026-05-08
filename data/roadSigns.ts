const base = [
  ["STOP belgisi", "STOP", "Ustunlıq", "Toqtaw shárt", "Transport tolıq toqtap, jol bos ekenin tekseredi.", "Kesilispe aldında hám qáwipli shıǵıslarda", "stop"],
  ["Jol beriw", "YIELD", "Ustunlıq", "Ustun jolǵa jol beriw", "Haydawshı bas jol qatnasıwshılarına jol beredi.", "Kesilispe aldında", "yield"],
  ["Jayaú ótpe jolı", "PED", "Informaciya", "Jayaúlar ótetuǵın aymaq", "Haydawshı tezlikti páseytip, jayaúǵa jol beredi.", "Zebra aldında", "pedestrian"],
  ["Tezlik 50", "SPEED50", "Tıyım", "Maksimal tezlik 50 km/s", "Kórsetilgen tezlikten asıwǵa bolmaydı.", "Qala ishindegi aymaqlarda", "speed"],
  ["Kirisiwge tıyım", "NOENTRY", "Tıyım", "Bul baǵıtta kirisiwge bolmaydı", "Bir baǵıtlı jolǵa qarsı kirisiwdi toqtatadı.", "Bir baǵıtlı jol shıǵısında", "noEntry"],
  ["Balalar", "CHILDREN", "Eskertiw", "Mektep yamasa balalar aymaǵı", "Haydawshı ayrıqsha abay bolıwı kerek.", "Mektep, baqsha janında", "children"],
  ["Parking", "PARK", "Informaciya", "Toqtap turıw ornı", "Transporttı belgilengen tártibte qaldırıw múmkin.", "Parking aymaǵında", "parking"],
  ["Bas jol", "MAIN", "Ustunlıq", "Bas jol boylap háreket", "Kesilispelerde ustunlıq beredi.", "Bas jol baslanǵanda", "mainRoad"],
  ["Toqtap turıwǵa tıyım", "NOPARK", "Tıyım", "Transport qaldırıwǵa bolmaydı", "Jol boyın bos saqlaw talap etiledi.", "Tıyım aymaǵında", "noParking"]
];

export const roadSigns = Array.from({ length: 25 }, (_, i) => {
  const item = base[i % base.length];
  return {
    name: i < base.length ? item[0] : `${item[0]} ${i + 1}`,
    code: i < base.length ? item[1] : `${item[1]}-${i + 1}`,
    category: item[2],
    description: item[3],
    meaning: item[4],
    correctPlacement: item[5],
    svgType: item[6]
  };
});
