// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = getPasswordLength()
  if (passwordLength >= 8 && passwordLength <= 128) {
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  else {
    alert('password was not within length criteria');
  }
 

}

function generatePassword(passwordLength) {
  var password = ""
  var characters = '';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';

  if (document.getElementById("checkbox1").checked) {
    characters += upperCase
  }
  if (document.getElementById("checkbox2").checked) {
    characters += lowerCase
  }
  if (document.getElementById("checkbox3").checked) {
    characters += numbers
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomInteger = Math.floor(Math.random() * characters.length)
    password += characters.charAt(randomInteger)
  }

  return password
}

function getPasswordLength() {
 let userInput = prompt("Please enter password length") 
 let passwordLength = parseInt(userInput);
 return passwordLength
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
