window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "traffic-police",
  lesson: "Хичээл 9 · Дасгал 8",
  title: "Замын цагдаа",
  description: "80 км/ц-ээс хэтэрсэн хурдны оноо болон эрх хасах эсэхийг тооцно.",
  fields: [{ name: "speed", label: "Хурд (км/ц)", min: 0 }],
  run({ speed }) {
    if (speed <= 80) return "Хурд хэвийн";
    const points = Math.floor((speed - 80) / 5);
    return points >= 5
      ? `${points} оноо алдсан. Эрх хасагдсан`
      : `${points} оноо алдсан. Эрх хасагдаагүй`;
  },
});
