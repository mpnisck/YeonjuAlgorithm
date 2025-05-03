function dnaStrand(dna) {
  let words = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      words += "A";
    } else if (dna[i] === "A") {
      words += "T";
    } else if (dna[i] === "G") {
      words += "C";
    } else if (dna[i] === "C") {
      words += "G";
    } else {
      words += dna[i];
    }
  }

  return words;
}
