// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert(message);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  let questionOne = prompt("How many characters would you like your password to contain");
}

// Array of questions for user
var questions = [
  { q: "How many characters would you like your password to contain", a: "8-128" },
  { q: "Would you like to include special characters?", a: "t" },
  { q: "There are 42 ounces in a pound.", a: "f" },
  { q: "The Declaration of Independence was created in 1745.", a: "f" },
  { q: "Bananas are vegetables.", a: "f" }
];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
