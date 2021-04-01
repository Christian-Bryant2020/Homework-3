// Assignment Code
var charactersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charactersNumbers = '0123456789';
var charactersSpecials = '-*/\][}{.,/?!@#$%^&*;:';
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function writePassword() {
  var password = generatePassword();
}

function generatePassword() {
  var options = getOptions();
  var result = [];
  var possibleCharacters = [];
  var guarenteedCharacters = [];
  
  do{
  if (options.specials){
    possibleCharacters = possibleCharacters.concat(charactersSpecials);
    guarenteedCharacters.push(getRandom(charactersSpecials))
  }
  if (options.uppers){
    possibleCharacters = possibleCharacters.concat(charactersUpper);
    guarenteedCharacters.push(getRandom(charactersUpper))
  }
  if (options.lowers){
    possibleCharacters = possibleCharacters.concat(charactersLower);
    guarenteedCharacters.push(getRandom(charactersLower))
  }
  if (options.numericals){
    possibleCharacters = possibleCharacters.concat(charactersNumbers);
    guarenteedCharacters.push(getRandom(charactersNumbers))
  }
console.log(guarenteedCharacters.length)
  }
while(guarenteedCharacters.length < options.length);
  document.getElementById("password").innerText = guarenteedCharacters.join("");
};
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]
  return randomElement;
}


function getOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  if (isNaN(length)) {
    alert("Input must be a number between 8 and 128.")
    return;
  }
  if (length < 8 || length > 128) {
    alert("Input must be a number between 8 and 128.")
    return;
  }
var specials = confirm("Would you like to have special characters?")
var uppers = confirm("Would you like to have uppercase characters?")
var lowers = confirm("Would you like to have lowercase characters?")
var numericals = confirm("Would you like to have numerical characters?")

if (specials === false && 
  uppers === false &&
  lowers === false &&
  numericals === false
  ){
    alert("You must choose at least one type of characters.")
    return;
  }
var passwordOptions = {
  length: length,
  specials: specials,
  uppers: uppers,
  lowers: lowers,
  numericals: numericals
}
return passwordOptions;
}
console.log(writePassword)
generateBtn.addEventListener("click", writePassword);


// if(isNaN(num1)){
//   document.write(num1 + " is not a number <br/>");
// }else{
//   document.write(num1 + " is a number <br/>");
// }