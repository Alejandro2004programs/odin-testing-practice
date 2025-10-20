export default function reverseString(stringToReverse) {
    let newString = "";
    for(let i = 0; i <= stringToReverse.length - 1; i++) {
        newString = newString + stringToReverse[stringToReverse.length - 1 - i];
    }
    return newString;
}