let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const generateInvoiceId = () => {
  let firstLetter = letters[Math.floor(Math.random() * letters.length)];
  let secondLetter = letters[Math.floor(Math.random() * letters.length)];

  let numbers = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1;

  return `${firstLetter}${secondLetter}${numbers}`;
};

export default generateInvoiceId;
