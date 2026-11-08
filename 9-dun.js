window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "grade",
  lesson: "Хичээл 9 · Дасгал 5",
  title: "Дүн",
  description: "0–100 оноонд тохирох үсгэн дүнг тодорхойлно.",
  fields: [{ name: "score", label: "Оноо (0–100)", min: 0, max: 100 }],
  run({ score }) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  },
});
