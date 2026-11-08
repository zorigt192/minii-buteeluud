window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "leap-year",
  lesson: "Хичээл 9 · Бонус",
  title: "Өндөр жил",
  description: "Оны өндөр жил эсэхийг Григорийн хуанлийн дүрмээр шалгана.",
  fields: [{ name: "year", label: "Он", integer: true, min: 1 }],
  run({ year }) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return isLeapYear ? `${year} — өндөр жил` : `${year} — энгийн`;
  },
});
