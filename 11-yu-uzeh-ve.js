window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "anime-picker",
  lesson: "Хичээл 11 · Бонус",
  title: "Өнөөдөр юу үзэх вэ?",
  description: "Өөрийн үзэх жагсаалтаас өнөөдөр үзэхийг санамсаргүй сонгоно.",
  fields: [
    {
      name: "anime",
      label: "Анимэний жагсаалт",
      type: "text",
      placeholder: "Жишээ: Naruto, One Piece, Demon Slayer",
      hint: "Нэрсийг таслал эсвэл шинэ мөрөөр тусгаарлана уу.",
    },
  ],
  run({ anime }) {
    const choices = anime.split(/[,\n]+/).map((name) => name.trim()).filter(Boolean);
    if (choices.length === 0) throw new Error("Анимэний нэрсээ оруулна уу.");
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return `Өнөөдөр үзэх: ${choice}`;
  },
});
