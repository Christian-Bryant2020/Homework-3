// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Welcome");
}

// Add event listener to generate button
<button generate = "writePassword(length)" ></button>



function writePassword(length) {
  var password = '';
  var charactersLower = 'abcdefghijklmnopqrstuvwxyz';
  var charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersNumbers = '0123456789';
  var charactersSpecials = '-*/\][}{.,/?!@#$%^&*;:';
  var passwordLength = prompt("8-128 characters")
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


//Create an array of lowercase letters
//Create ana array of uppder case letters
//create an array of numbers
//create and array of special characters
//