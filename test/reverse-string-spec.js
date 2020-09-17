const assert = require("assert");
const reverseString = require('../problems/reverse-string.js')

describe("reverseString()", () => {
    it("given a string it returns that string in reverse order", () => {
        //arrange
        let string = "fun";
        let result = "nuf";
        //act
        let actual = reverseString(string);
        //assert
        assert.equal(result, actual);
    });
});
