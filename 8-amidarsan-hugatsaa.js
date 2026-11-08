window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "lived-time",
  lesson: "Хичээл 8 · Code Battle 2",
  title: "Амьдарсан хугацаа",
  description: "Насыг өдөр, цаг, минутаар ойролцоогоор тооцно.",
  fields: [{ name: "age", label: "Хэдэн настай вэ?", integer: true, min: 0, max: 150 }],
  run({ age }) {
    const days = age * 365;
    const hours = days * 24;
    const minutes = hours * 60;
    return `${age} нас = ${days.toLocaleString("mn-MN")} өдөр = ${hours.toLocaleString("mn-MN")} цаг = ${minutes.toLocaleString("mn-MN")} минут`;
  },
});
