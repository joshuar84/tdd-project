function myMap(array, cb) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(cb(array[i]));
    }
    //array.map(cb);
    return res;
}

module.exports = myMap;
