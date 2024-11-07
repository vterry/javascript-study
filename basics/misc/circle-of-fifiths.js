function generateMajorScale(note) {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  let startIndex = notes.indexOf(note);
  if (startIndex === -1) {
    return "nota inválida";
  }

  const majorScalePattern = [2, 2, 1, 2, 2, 2, 1];
  const scale = [note];

  // keeping trying to solve the problem of adding the accidentals corretly ... today i getting close the solution i guess

  function getEnharmony(note) {
    let enharmony = note === "F" ? "E#" : note === "C" ? "B#" : "";
    return enharmony;
  }

  majorScalePattern.forEach((interval) => {
    startIndex = (startIndex + interval) % notes.length;
    if (majorScalePattern[startIndex + 1] === 1) {
      if (getEnharmony(notes[startIndex]) !== "") {
        scale.push(getEnharmony(notes[startIndex]));
        return;
      }
    }
    scale.push(notes[startIndex]);
  });

  return scale;
}

console.log(generateMajorScale("C#"));
