
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

// this function 
function generatePassword(length, includeUppercase, includeNumbers, includeSpecialChars) {
  var charset = "abcdefghijklmnopqrstuvwxyz";
  var password = "";
if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
if (includeNumbers) {
    charset += "0123456789";
  }
if (includeSpecialChars) {
    charset += "!@#$%^&*()";
  }
for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
return password;
}

// asks if you want uppercase letters
var uppercaseResponse = confirm("Would you like uppercase letters in your password?");
// asks if you want numbers 
var numbersResponse = confirm("Would you like numbers in your password?");
// asks if you want characters 
var specialCharsResponse = confirm("Would you like special characters in your password?");
// generates the ppassword
var password = generatePassword(10, uppercaseResponse, numbersResponse, specialCharsResponse);
// Show the generated password in an alert box
alert("Your generated password is: " + password);