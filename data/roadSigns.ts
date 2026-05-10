const base = [
  ["STOP belgisi", "STOP", "Ústinlik belgileri", "Toqtaw shárt", "Transport tolıq toqtap, jol bos ekenin tekseredi.", "Kesilispe aldında hám qáwipli shıǵıs ornında", "stop"],
  ["Jol beriw", "YIELD", "Ústinlik belgileri", "Ústin jolǵa jol beriw", "Haydawshı bas jol qatnasıwshılarına jol beredi.", "Kesilispe aldında", "yield"],
  ["Jayaú júrginshi ótpe jolı", "PED", "Axborot-kórsetkish belgiler", "Jayaú júrginshiler ótetuǵın aymaq", "Haydawshı tezlikti páseytip, jayaú júrginshige jol beredi.", "Jayaú júrginshi ótpe jolı aldında", "pedestrian"],
  ["Tezlik shegarası 50", "SPEED50", "Tıyım salıwshı belgiler", "Maksimal tezlik 50 km/s", "Kórsetilgen tezlikten asıwǵa bolmaydı.", "Qala ishindegi aymaqlarda", "speed"],
  ["Kirisiwge tıyım", "NOENTRY", "Tıyım salıwshı belgiler", "Bul baǵıtta kirisiwge bolmaydı", "Bir baǵıtlı jolǵa qarsı kirisiwdi toqtatadı.", "Bir baǵıtlı jol shıǵısında", "noEntry"],
  ["Balalar", "CHILDREN", "Eskertiwshi belgiler", "Mektep yamasa balalar aymaǵı", "Haydawshı ayrıqsha abay bolıwı kerek.", "Mektep hám balalar baqshası janında", "children"],
  ["Toqtap turıw ornı", "PARK", "Servis belgileri", "Transporttı toqtatıp turıw ornı", "Transporttı belgilengen tártipte qaldırıw múmkin.", "Toqtap turıw aymaǵında", "parking"],
  ["Bas jol", "MAIN", "Ústinlik belgileri", "Bas jol boylap háreket", "Kesilispelerde ústinlik beredi.", "Bas jol baslanǵan jerde", "mainRoad"],
  ["Toqtap turıwǵa tıyım", "NOPARK", "Tıyım salıwshı belgiler", "Transport qaldırıwǵa bolmaydı", "Jol boyın bos saqlaw talap etiledi.", "Tıyım salınǵan aymaqta", "noParking"]
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
