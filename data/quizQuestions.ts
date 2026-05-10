const topics = ["Svetofor", "Jol belgileri", "Jayaú júrginshi", "Kesilispe", "Tezlik hám aralıq", "Qáwipsiz háreket"];

const questionTemplates = [
  ["Qızıl svetofor signalında haydawshı ne islewi kerek?", "Toqtaw sızıǵı aldında tolıq toqtaw", "Tezlikti asırıp ótiw", "Tek signalǵa qaramay burılıw", "Jayaú júrginshiniń háreketine itibar bermew", "A", "Qızıl signal háreketti toqtatadı hám tolıq toqtawdı talap etedi.", "Svetofor"],
  ["Jasıl svetofor signalı neni bildiredi?", "Qáwipsiz jaǵdayda háreket etiwge ruxsat", "Májbúriy toqtaw", "Tek jayaú júrginshilerge tıyım", "Tezlik shegarası joq ekenin", "A", "Jasıl signal ruxsat beredi, biraq jol jaǵdayın baqlaw minnetli.", "Svetofor"],
  ["Sarı signal janǵanda eń durıs háreket qaysı?", "Abay bolıp, imkanı bolsa toqtaw", "Tezlikti asırıw", "Kesilispege mindetli kirip ketew", "Signalǵa ámel etpew", "A", "Sarı signal almasıw haqqında eskertedi hám abaylıqtı talap etedi.", "Svetofor"],
  ["Jayaú júrginshi ótpe jolı belgisi haydawshıǵa neni esletedi?", "Jayaú júrginshige jol beriwdi", "Tezlikti asırıwdı", "Toqtap turıwǵa ruxsat ekenin", "Bas jol baslanǵanın", "A", "Jayaú júrginshi ótpe jolında haydawshı tezlikti páseytip, jayaú júrginshige jol beriwi kerek.", "Jayaú júrginshi"],
  ["STOP belgisi aldında ne talap etiledi?", "Tolıq toqtaw", "Tek tezlikti páseytiriw", "Signaldı kútiw", "Toqtamay ótiw", "A", "STOP belgisi tolıq toqtaw hám jaǵdaydı tekseriwdi talap etedi.", "Jol belgileri"],
  ["Jol beriw belgisi neni bildiredi?", "Ústin jol qatnasıwshılarına jol beriwdi", "Barlıq jaǵdayda birinshi ótiwdi", "Toqtap turıwǵa ruxsat etiwdi", "Tezlikti asırıwdı", "A", "Jol beriw belgisi ústinlikke iye qatnasıwshını ótkiziwdi bildiradi.", "Kesilispe"],
  ["Tezlik shegarası belgisi qaysı talaptı bildiradi?", "Kórsetilgen tezlikten aspawdı", "Tezlikti mindetli asırıwdı", "Tek jayaú júrginshilerge arnalǵanın", "Toqtap turıw ornın", "A", "Tezlik shegarası qáwipsiz háreket ushın belgilenedi.", "Tezlik hám aralıq"],
  ["Qáwipsiz aralıq ne ushın kerek?", "Waqıtında reakciya jasaw ushın", "Aldıńǵı transportqa jaqın júriw ushın", "Tezlikti kóbeytiw ushın", "Jol belgilerin kórmew ushın", "A", "Qáwipsiz aralıq tormozlanıwǵa hám apat aldın alıwǵa járdem beredi.", "Tezlik hám aralıq"],
  ["Kesilispede ústinlik qalay anıqlanadı?", "Svetofor, belgiler hám jol sızıqları arqalı", "Tek transport reńi arqalı", "Tek haydawshı qálewi menen", "Tezlik joqarılıǵı menen", "A", "Kesilispede ústinlik rásmiy belgiler hám signallar menen belgilenedi.", "Kesilispe"],
  ["Qarańǵı waqıtta haydawshı nege ayrıqsha itibar beredi?", "Kóriniw hám qáwipsiz aralıqqa", "Tek muzıka dawısına", "Jol belgilerin kórmewge", "Tezlikti sheksiz asırıwǵa", "A", "Kóriniw tómenlegende tezlik hám aralıq qáwipsizlik ushın áhmiyetli.", "Qáwipsiz háreket"]
];

export const quizQuestions = Array.from({ length: 40 }, (_, i) => {
  const item = questionTemplates[i % questionTemplates.length];
  const topic = i < questionTemplates.length ? item[7] : topics[i % topics.length];
  return {
    question: i < questionTemplates.length ? item[0] : `${topic} boyınsha ${i + 1}-soraw: qáwipsiz háreket ushın eń durıs ámel qaysı?`,
    optionA: i < questionTemplates.length ? item[1] : "Belgiler hám signallarǵa ámel etiw",
    optionB: i < questionTemplates.length ? item[2] : "Tek óz tezligińe qaraw",
    optionC: i < questionTemplates.length ? item[3] : "Kesilispede toqtamay ótiw",
    optionD: i < questionTemplates.length ? item[4] : "Aralıqtı saqlamaw",
    correctOption: item[5],
    explanation: i < questionTemplates.length ? item[6] : "Durıs juwap: belgiler, svetofor hám jol jaǵdayına sáykes háreket qáwipsizlikti támiyinleydi.",
    topic
  };
});
