// Assignment Code
var generateBtn = document.querySelector("#generate");


var generatePassword = function() {
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var resultArray = [];
  var userArray = [];

  uppercaseArray [1]

  var numCharacter = prompt ("Select a number between 8 and 128 to determine the length of the password.");
  var numbers = confirm ("Should we include numbers?");
  var uppercases = confirm ("Should we include uppercase characters?");
  var lowercases = confirm ("Should we include lowercase characters?");
  var characters = confirm ("Should we include special characters?");

  if (numbers){
    resultArray = resultArray.concat(numberArray);  
  }  
  if (uppercases){
    resultArray = resultArray.concat(uppercaseArray);
  }  
  if (lowercases){
    resultArray = resultArray.concat(lowercaseArray);
  }  
  if (characters){
    resultArray = resultArray.concat(characterArray);
  }
  console.log(resultArray)
  
  
  for (var i = 0; i < numCharacter; i++) {  
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
  
    return userArray.join("") ;
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  };



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);