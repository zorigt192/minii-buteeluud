window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "rating",
  lesson: "Хичээл 10 · Дасгал 4",
  title: "Үнэлгээ",
  description: "1–5 хооронд үнэлгээ сонгоод одоор илэрхийлнэ.",
  fields: [{ name: "rating", label: "Үнэлгээ (1–5)", integer: true, min: 1, max: 5 }],
  run({ rating }) {
    return "⭐".repeat(rating);
  },
});
