function returnsThree() {
    return 3;
}

function reciprical(num) {
    if(num < 1 || num > 1000000){
        throw new Error();
    }
    return 1 / num;
}

module.exports = {
    returnsThree,
    reciprical,
}
