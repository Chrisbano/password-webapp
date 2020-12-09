export class RandomPassword {
    constructor() {
        this.characters = "";
    }
    setUpperCase(isUpperCase){
        if (isUpperCase) {
            this.characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        return this
    }

    setLowerCase(isLowerCase){
        if (isLowerCase) {
            this.characters += "abcdefghijklmnopqrstuvwxyz"
        }
        return this
    }

    setLength(length) {
        this.length = length;
        return this;
    }
    setNumbers(isNumeric) {
        if (isNumeric) {
          this.characters += "0123456789";
        }
        return this;
    }

    setSymbol(isSymbolic) {
        if (isSymbolic) {
          this.characters += "!@$%^&*()<>,.?/[]{}-=_+";
        }
        return this;
    }


    generatePassword(){

        let characterList = this.characters;
        if(characterList <= 0){
            return "Hey dont worry you will get there eventually";
        }
        let password = "";
        for (let i = 0; i < this.length; ++i) {
            password += characterList[getRandomInt(0, characterList.length - 1)];
        }
        return password;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    


    


   


        

    
        

}