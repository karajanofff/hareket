const topics = ["Svetofor", "Jol belgileri", "Jayaú júrginshi", "Kesilispe", "Tezlik hám aralıq", "Qáwipsiz háreket"];

export const quizQuestions = Array.from({ length: 40 }, (_, i) => {
  const topic = topics[i % topics.length];
  return {
    question: `${topic} boyınsha ${i + 1}-sawol: qáwipsiz háreket ushın eń durıs ámel qaysı?`,
    optionA: "Belgiler hám signalǵa ámel etiw",
    optionB: "Tek óz tezligińe qaraw",
    optionC: "Kesilispede toqtamay ótiw",
    optionD: "Aralıqtı saqlamaw",
    correctOption: "A",
    explanation: "Durıs juwap: belgiler, svetofor hám jaǵdayǵa sáykes háreket qáwipsizlikti támiyinleydi.",
    topic
  };
});
