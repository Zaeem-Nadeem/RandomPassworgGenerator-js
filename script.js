const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const num = document.querySelector("#num");
const sign = document.querySelector("#sign");
const field = document.querySelector("#field");
const btn = document.querySelector("#btn");
const length = parseInt(document.querySelector("input[type='number']").value);

function generatePassword(length, includeUpper, includeLower, includeNumber, includeSymbol) {
    let charset = '';
    if (includeUpper) charset += upperSet;
    if (includeLower) charset += lowerSet;
    if (includeNumber) charset += numberSet;
    if (includeSymbol) charset += symbolSet;
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];

    }
    return password;
}

function check() {
    const includeUpper = upper.checked;
    const includeLower = lower.checked;
    const includeNumber = num.checked;
    const includeSymbol = sign.checked;
    const password = generatePassword(length, includeUpper, includeLower, includeNumber, includeSymbol);
    field.value = password;
}

btn.addEventListener("click", check);








// const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerSet = "abcdefghijklmnopqrstuvwxyz"
// const numberSet = "1234567890"
// const symbolSet = "~!@#$%^&*()_+/"

// // selectors
// const passBox = document.getElementById("pass-box")
// const totalChar = document.getElementById("total-char")
// const upperInput = document.getElementById("upper-case")
// const lowerInput = document.getElementById("lower-case")
// const numberInput = document.getElementById("numbers")
// const symbolInput = document.getElementById("symbols")



// const getRandomData = (dataSet) => {
//     return dataSet[Math.floor(Math.random() * dataSet.length)]
// }

// const generatePassword = (password = "") => {
//     if (upperInput.checked) {
//         password += getRandomData(upperSet)
//     }
//     if (lowerInput.checked) {
//         password += getRandomData(lowerSet)
//     }
//     if (numberInput.checked) {
//         password += getRandomData(numberSet)
//     }
//     if (symbolInput.checked) {
//         password += getRandomData(symbolSet)
//     }
//     if (password.length < totalChar.value) {
//         return generatePassword(password)
//     }

//     passBox.innerText = truncateString(password, totalChar.value);
// }


// generatePassword();

// document.getElementById("btn").addEventListener(
//     "click",
//     function() {
//         generatePassword();
//     }

// )


// function truncateString(str, num) {
//     if (str.length > num) {
//         let subStr = str.substring(0, num);
//         return subStr;
//     } else {
//         return str;
//     }
// }