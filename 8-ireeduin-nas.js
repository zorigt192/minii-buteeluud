window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "future-age",
  lesson: "Хичээл 8 · Дасгал 3",
  title: "Ирээдүйн нас",
  description: "Төрсөн он болон ирээдүйн оноор тухайн үед хэдэн настайг тооцно.",
  fields: [
    { name: "birthYear", label: "Төрсөн он", integer: true, min: 1 },
    { name: "futureYear", label: "Аль онд?", integer: true, min: 1 },
  ],
  run({ birthYear, futureYear }) {
    if (futureYear < birthYear) throw new RangeError("Ирээдүйн он төрсөн оноос өмнө байж болохгүй.");
    return `${futureYear} онд ${futureYear - birthYear} настай болно`;
  },
});
