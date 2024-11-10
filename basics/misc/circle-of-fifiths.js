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

  function checkNote(search, scale) {
    return scale.some((note) => note.includes(search));
  }

  majorScalePattern.forEach((interval, index) => {
    startIndex = (startIndex + interval) % notes.length;
    if (checkNote(notes[index].charAt(0), scale)) {
      if (getEnharmony(notes[startIndex]) !== "") {
        scale.push(getEnharmony(notes[startIndex]));
        return;
      }
    }
    scale.push(notes[startIndex]);
  });

  return scale;
}

console.log(
  generateMajorScale("C").toString() ==
    ["C", "D", "E", "F", "G", "A", "B", "C"].toString()
);
console.log(
  generateMajorScale("G").toString() ==
    ["G", "A", "B", "C", "D", "E", "F#", "G"].toString()
);
console.log(
  generateMajorScale("D").toString() ==
    ["D", "E", "F#", "G", "A", "B", "C#", "D"].toString()
);
console.log(
  generateMajorScale("A") ==
    ["A", "B", "C#", "D", "E", "F#", "G#", "A"].toString()
);
console.log(
  generateMajorScale("E") ==
    ["E", "F#", "G#", "A", "B", "C#", "D#", "E"].toString()
);
console.log(
  generateMajorScale("B") ==
    ["B", "C#", "D#", "E", "F#", "G#", "A#", "B"].toString()
);
console.log(
  generateMajorScale("F#") ==
    ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F#"].toString()
);
console.log(
  generateMajorScale("C#").toString() ==
    ["C#", "D#", "E#", "F#", "G#", "A#", "B#", "C#"].toString()
);
