const assert = require('assert');
const { interface } = require('chai-spies');
const { isContext } = require('vm');
const { returnsThree, reciprical } = require('../problems/number-fun.js');


describe('returnsThree()', () => {
    it('should return the number 3', () => {
        let expected = 3;
        let actual = returnsThree();
        assert.equal(actual, expected);
    })
})
describe('reciprical()', () => {
    context("if given argument is less than 1 or greater that 1,000,000", () => {
        it('should return 1 divided by the number', () => {
            //const err = new TypeError("Input is out of Range");
            let input = 0.5;
            //let expected = 2;
            //let actual = reciprical(input);
            assert.throws(() => reciprical(input));
        });
        it("should return 1 divided by the number", () => {
            let input = 1000001;
            assert.throws(() => reciprical(input));
        })
    });
    context("if given is between 1 and 1,000,000", () => {
        it('should return 1 divided by the number', () => {
            let input = 2;
            let expected = 0.5;
            let actual = reciprical(input);
            assert.strictEqual(actual, expected);
        });
    });


})
