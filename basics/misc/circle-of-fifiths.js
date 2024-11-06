function generateMajorScale(note) {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "E#",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "B#",
  ];

  let startIndex = notes.indexOf(note);
  if (startIndex === -1) {
    return "nota inválida";
  }

  const majorScalePattern = [2, 2, 1, 2, 2, 2, 1];
  const scale = [note];

  majorScalePattern.forEach((interval) => {
    startIndex = (startIndex + interval) % notes.length;
    scale.push(notes[startIndex]);
  });

  return scale;
}

console.log(generateMajorScale("C#"));
