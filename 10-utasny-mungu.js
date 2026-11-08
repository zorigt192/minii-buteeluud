window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "monthly-savings",
  lesson: "Хичээл 10 · Дасгал 9",
  title: "Утасны мөнгө",
  description: "Сар бүр хадгалах мөнгө болон хугацаагаар хуримтлалын хүснэгт гаргана.",
  fields: [
    { name: "monthlyAmount", label: "Сар бүр хадгалах мөнгө (₮)", min: 0 },
    { name: "months", label: "Хэдэн сар?", integer: true, min: 1, max: 1200 },
  ],
  run({ monthlyAmount, months }) {
    return Array.from({ length: months }, (_, index) => {
      const total = monthlyAmount * (index + 1);
      return `${index + 1}-р сар: ${total.toLocaleString("mn-MN")}₮`;
    }).join("\n");
  },
});
