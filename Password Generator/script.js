function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let characters = "";
    if (includeUppercase) characters += upperCase;
    if (includeLowercase) characters += lowerCase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    document.getElementById("password").value = password;
  }
  
  function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }
  