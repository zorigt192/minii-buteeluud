window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "chess-rice",
  lesson: "Хичээл 10 · Бонус",
  title: "Шатрын будаа",
  description: "Нүд бүр дээр өмнөхөөсөө хоёр дахин их будаа тавихад нийт хэд болохыг тооцно.",
  fields: [{ name: "squares", label: "Шатрын нүдний тоо", integer: true, min: 1, max: 64 }],
  run({ squares }) {
    return `${(2n ** BigInt(squares) - 1n).toLocaleString("mn-MN")} будаа`;
  },
});
