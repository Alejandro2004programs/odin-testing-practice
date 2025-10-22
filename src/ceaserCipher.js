export default function ceaserCipher(string, number) {
    let returnString = "";
    let offset = (Number(number) % 26) 
    for(let i = 0; i <= string.length - 1; i++) {
        let ASCII = string.charCodeAt(i);
        if(ASCII >= 97 && ASCII <= 122) {
            if(ASCII + offset > 122) {
                let newASCII = ASCII - 26 + offset;
                let newChar = String.fromCharCode(newASCII);
                returnString = returnString + newChar;
            }
            else {
                let newASCII = ASCII + offset;
                let newChar = String.fromCharCode(newASCII);
                returnString = returnString + newChar;
            }
        }
        else if(ASCII >= 65 && ASCII <= 90) {
            if(ASCII + offset > 90) {
                let newASCII = ASCII - 26 + offset;
                let newChar = String.fromCharCode(newASCII);
                returnString = returnString + newChar;
            }
            else {
                let newASCII = ASCII + offset;
                let newChar = String.fromCharCode(newASCII);
                returnString = returnString + newChar;
            }
        }
        else {
            returnString = returnString + string[i];
        }
    }
    return returnString;
}

// Note for later: look into breaking up the function into a smaller one
// because it will get into a lot of lines