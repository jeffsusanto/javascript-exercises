function reverseString(str) {
    let reverse = ''
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            reverse += str.slice(-1)
        } else {
            reverse += str.slice(-1 - i, -i)
        }
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
