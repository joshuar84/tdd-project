const should = require('chai').should();
const { expect } = require('chai');
const chai = require('chai');
const { interface } = require('chai-spies');
const spy = require('chai-spies');
chai.use(spy);
const myMap = require('../problems/myMap.js')


describe('myMap()', () => {
    let array;
    let callback;
    let expected;
    let actual;
    let global = this;
    beforeEach(() => {
        array = [1, 2, 3];
        callback  = el => el + 1;
        expected = [2, 3, 4];

    });
    it('should execute a callback on every element of an array', () => {
        actual = myMap(array, callback);
        expect(expected).to.deep.equal(actual);
    })
    it("should not mutate the original array", () => {
        let copy = [...array]
        myMap(array, callback);
        expect(copy).to.deep.equal(array)
    });
    it("should not call Array.map()", () => {
        const spy = chai.spy.on(array, "map");
        myMap(array, callback);
        //console.log(spy);
        //expect(spy.__spy.called).to.be.false;
        expect(spy).to.have.been.called.below(1);
    });
    it('should call the callback once for each element of the array', () => {

        const spy = chai.spy(callback);
        let result = myMap(array, spy);
        
        expect(spy).to.have.been.called.exactly(array.length);
    })
})
