// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// prompt the user for criteria, accept the input, and return a password.
function generatePassword() {

// ask user what type of criteria they want.
  var wantLowerCase = false;
  var wantUpperCase = false;
  var wantNumeric = false;
  var wantSpecial = false;

// prompt users for the criteria they select.
  wantLowerCase = window.confirm("Do you want to include lower case letters?");
  wantUpperCase = window.confirm("Do you want to include upper case letters?");
  wantNumeric = window.confirm("Do you want to include numbers?");
  wantSpecial = window.confirm("Do you want to include special characters");

  var passwordLength = 0;
  while(passwordLength<8 || passwordLength>128) {
    passwordLength = window.prompt("Choose a length 8 characters and no more than 128 characters");
  }
// generate password.
  var criteria = {
    lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    numbers: ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9", "0"],
    special: ['!', '#', '$']
    // special: ["!" , "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , '\' , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~" , "\"" , ]
    // Create an array of all possible letter
  // Use If statements to push criteria arrays to possible letter array
  // Use Math.random() to randomly select index of array
  // Use a loop to determine password length
  }

  var allCharacters = [];

  if (wantLowerCase) {
    allCharacters = allCharacters.concat(criteria['lowerCase'])
    // allCharacters = [] + ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    // allCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  }

  if (wantUpperCase) {
    allCharacters = allCharacters.concat(criteria['upperCase'])
  }

  if (wantNumeric) {
    allCharacters = allCharacters.concat(criteria['numbers'])
  }

  if (wantSpecial) {
    allCharacters = allCharacters.concat(criteria['special'])
  }

  // GOAL:
  // At the end of all of the conditional statements,
  // we want to have an array that will contain
  // all of the characters the user wants to have in their password

  // Hey, give me 5 random elements in the allCharacters array
  // to create a RANDOM password of length 5
  // passwordLength = 3
  var password = "";
  // password = a
  // password = aY
  // password = aY4

  for (let i = 0; i < passwordLength; i = i + 1) {
    // getting a random char from the array
    var x = Math.random() * allCharacters.length;
    var randomPosition = Math.floor(x);
    // and adding to the password variable
    password = password + allCharacters[randomPosition]
  }

  return password;

  // array: [a, b, c]
          // 0  1  2 
  // let x = random choice between 0 1 and 2
  // array[x] => a
      
  //      [0, 1) <-- Can be a decimal
  //      * allCharacters Len
  //      [0, allChar Len] <--- Can be a decimal
  //      2.75, 2, 5.65, 
  // Take this decimal, and round it down
  //   Math.floor(2.75) => 2
  //   Math.floor(2) => 2
  // allCharacters[randomPosition] = RANDOM CHARACTER IN ARRAY

  // var x = Math.floor(2.863)
  // var x = 2
  // returns between [0, length of all Chars) - 0 inclusive, 10 exclusive
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);