const chai = require("chai");
const {expect} = require("chai");
const { interface } = require("chai-spies");
const spy = require("chai-spies");
const Person = require("../problems/person");
chai.use(spy);

describe("Person", () => {
    let person;
    let name;
    let age;
    beforeEach(() => {
        name = "Josh";
        age = 1000;
        person = new Person(name, age);
    });
    context("Given a class Person", () => {
        it("should contain a name property",() => {
            expect(person).to.have.property("name");
        });
        it("should contain an age property", () => {
            expect(person).to.have.property("age");
        });
    });
    context("Given a prototype.sayHello()", () => {
        it("should return a string of the person's name and a greeting message", () => {
            let exptected = person.sayHello();
            expect(expeted).to.be.equal(`Hello, ${name}!`);
        });
    })
});
