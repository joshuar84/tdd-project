function reverseString(string){
    let chars = string.split("");
    let array = [];
    for(let i = chars.length-1;i>=0;i--){
        letter = chars[i];
        array.push(letter);
    }
    return array.join("");
}

module.exports = reverseString;
