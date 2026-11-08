window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "candy-sharing",
  lesson: "Хичээл 10 · Дасгал 10",
  title: "Чихэр хуваах",
  description: "Чихрийг тэнцүү хувааж болох бүх хувилбарыг олно.",
  fields: [{ name: "candy", label: "Нийт чихэр", integer: true, min: 1, max: 100000 }],
  run({ candy }) {
    const options = [];
    for (let people = 1; people <= candy; people++) {
      if (candy % people === 0) {
        options.push(`${people} хүнд ${candy / people} ширхэг`);
      }
    }
    if (options.length === 2) options.push("Анхны тоо");
    return options.join("\n");
  },
});
