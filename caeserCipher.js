const cipherChar = (char, factor) => {
    const code = char.charCodeAt(0);
    let newCode = code;
    if(code >= 97 && code <=122){
        if(code + factor <= 122 && code + factor >= 97 ){
            newCode = code + factor;
        }
        else if(code + factor > 122) {
            newCode = code + factor - 122 + 97 -1;
        }
        else if (code + factor < 97){
            newCode = code + factor + 122 - 97 +1;
        }
    }else if(code >= 65 && code <=90){
        if(code + factor <= 90 && code + factor >= 65){
            newCode = code + factor;
        }
        else if(code + factor > 90) {
            newCode = code + factor - 90 + 65 -1;
        }
        else if (code + factor < 65){
            newCode = code +factor +90 -65 +1
        }
    }
    return newCode;
};
const cipherString = (string, factor) => {
    let newString = "";
    for (let i = 0; i<string.length; i++){
        const newCharCode = cipherChar(string.charAt(i), factor);
        newString += String.fromCharCode(newCharCode);
    }
    return newString;
};

module.exports = cipherString;