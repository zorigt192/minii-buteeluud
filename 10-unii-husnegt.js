window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "price-table",
  lesson: "Хичээл 10 · Дасгал 7",
  title: "Үнийн хүснэгт",
  description: "Нэг ширхэгийн үнээр 1–10 ширхэгийн үнийг гаргана.",
  fields: [{ name: "price", label: "Нэг ширхэгийн үнэ (₮)", min: 0 }],
  run({ price }) {
    return Array.from({ length: 10 }, (_, index) => {
      const quantity = index + 1;
      return `${quantity} ширхэг: ${(quantity * price).toLocaleString("mn-MN")}₮`;
    }).join("\n");
  },
});
