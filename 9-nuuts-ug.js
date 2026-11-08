window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "password-check",
  lesson: "Хичээл 9 · Дасгал 4",
  title: "Нууц үг",
  description: "Шинэ нууц үгийг давтан оруулсан утгатай харьцуулна.",
  fields: [
    { name: "password", label: "Шинэ нууц үг", type: "password" },
    { name: "confirmation", label: "Нууц үгээ дахин оруул", type: "password" },
  ],
  run({ password, confirmation }) {
    return password === confirmation
      ? "Нууц үг амжилттай солигдлоо"
      : "Нууц үгээ зөв давтаж оруулаарай";
  },
});
