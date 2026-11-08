window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "reverse-number",
  lesson: "Хичээл 8 · Code Battle 6",
  title: "Тонгорогсон тоо",
  description: "4 оронтой тооны цифрүүдийн дарааллыг урвуулна.",
  fields: [{ name: "number", label: "4 оронтой тоо", integer: true, min: 1000, max: 9999 }],
  run({ number }) {
    const reversed = Number(String(number).split("").reverse().join(""));
    return `${number} → ${reversed}`;
  },
});
