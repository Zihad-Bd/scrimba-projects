const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function clicked() {
//console.log(document.getElementById("symbol").checked);
}

function generatePasswordClicked() {
    let passwordLengthInputElement =
        document.getElementById("password-length-input");
    let passwordLength = parseInt(passwordLengthInputElement.value);
    console.log(passwordLength)
    let symbolElement = document.getElementById("symbol");
    let canSymbolExist = symbolElement.checked;
    let numberElement = document.getElementById("number");
    let canNumberExist = numberElement.checked;
    console.log(canSymbolExist, canNumberExist);
    let generatedPassword1 = generatePassword(passwordLength, canSymbolExist,
        canNumberExist);
    let generatedPassword2 = generatePassword(passwordLength, canSymbolExist,
        canNumberExist);
    let password1Element = document.getElementById("password-1");
    password1Element.textContent = generatedPassword1;
    let password2Element = document.getElementById("password-2");
    password2Element.textContent = generatedPassword2;
    console.log(password1Element)
}

function generatePassword(passwordLength, canSymbolExist,
    canNumberExist) {
    let password = "";
    for (let i = 0; i < passwordLength; ++i) {
        let randomCharacter = getRandomCharacter();
        if ( !canSymbolExist && isSymbol(randomCharacter)) {
            --i;
            continue;
        }
        if ( !canNumberExist && isNumber(randomCharacter)) {
            --i;
            continue;
        }
        password += randomCharacter;
    }
    return password;
}

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() *
     characters.length);
     return characters[randomIndex];
}

function isNumber(character) {
    if (character >= "0" && character <= "9") {
        return true;
    }
    return false;
}

function isSymbol(character) {
    if (!(character >= "0" && character <= "9") && 
        !(character >= "a" && character <= "z") &&
        !(character >= "A" && character <= "Z")) {
        return true;
    }
    return false;
}



