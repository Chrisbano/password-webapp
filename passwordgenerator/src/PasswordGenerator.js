import { isUpdateExpression } from "@babel/types";
import { isSymbol } from "util";

let characters = '';
let passwordLength = 0;


const addUpperCase = isUpperCase => {
    if (isUpperCase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    return '';
}

const addLowerCase = isLowerCase => {
    if (isLowerCase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    return '';
}


const addSymbols = isSymbolic => {
    if (isSymbolic) {
        characters += '~`!@#$%^&*()-_=+{[}]:;?.,/><';
    }
    return '';
}

const addNumbers = isNumeric => {
    if (isNumeric) {
        characters += '123456789';
    }
    return '';
}

const getRandomIntger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const passwordCharacters = () => {
    let password = '';
    if(characters.length < 1){
        return "You will find what you are looking for";
    }
    for(let i = 0; i <passwordLength; i++){
        password += characters[getRandomIntger(0,characters.length - 1)];
    }
    characters = '';
    passwordLength = 0;
    return password;
}

export const setPasswordLength = length => {
    passwordLength = length;
    return passwordLength;
}

export const generatePassword = (passwordProps, passwordLength) => {
    const {uppercase, lowercase, symbols, numbers } = passwordProps;
    setPasswordLength(passwordLength);
    addLowerCase(lowercase);
    addUpperCase(uppercase);
    addSymbols(symbols);
    addNumbers(numbers);
    const password = passwordCharacters;
    return password;
}


