const chars = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~\\`|}{[]:;?><,./-=0123456789",
];

const passFieldsEl1 = document.getElementById("pass-field1");
const passFieldsEl2 = document.getElementById("pass-field2");
const passFieldsEl3 = document.getElementById("pass-field3");
const passFieldsEl4 = document.getElementById("pass-field4");

function password() {
  let pass = "";
  let str = chars[0];

  for (let i = 0; i <= 15; i++) {
    const char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return pass;
}

function generatePass() {
  passFieldsEl1.value = password();
  passFieldsEl2.value = password();
  passFieldsEl3.value = password();
  passFieldsEl4.value = password();
}
