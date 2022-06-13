const characters = [
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passFieldsEl1 = document.getElementById("pass-field1");
const passFieldsEl2 = document.getElementById("pass-field2");
const passFieldsEl3 = document.getElementById("pass-field3");
const passFieldsEl4 = document.getElementById("pass-field4");

const password = () => {
  let pass = "";
  for (let i = 0; i <= 15; i++) {
    const char = characters[Math.floor(Math.random() * characters.length)];
    pass += char;
  }
  return pass;
};

function generatePass() {
  passFieldsEl1.value = password();
  passFieldsEl2.value = password();
  passFieldsEl3.value = password();
  passFieldsEl4.value = password();
}
