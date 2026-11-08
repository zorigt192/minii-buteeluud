window.lessonExercises = window.lessonExercises || [];
window.lessonExercises.push({
  id: "records",
  lesson: "Хичээл 11 · Дасгал 5",
  title: "Рекорд",
  description: "Оруулсан рекордуудаас хамгийн их болон хамгийн бага утгыг олно.",
  fields: [
    {
      name: "records",
      label: "Рекордны утгууд",
      type: "text",
      placeholder: "Жишээ: 1200, 3400, 900, 5100",
      hint: "Тоонуудыг таслал эсвэл зайгаар тусгаарлана уу.",
    },
  ],
  run({ records }) {
    const values = records.split(/[,\s]+/).filter(Boolean).map(Number);
    if (values.length === 0 || values.some((value) => !Number.isFinite(value))) {
      throw new Error("Рекордонд зөв тоонууд оруулна уу.");
    }
    return `Рекорд: ${Math.max(...values).toLocaleString("mn-MN")}\nХамгийн бага: ${Math.min(...values).toLocaleString("mn-MN")}`;
  },
});
