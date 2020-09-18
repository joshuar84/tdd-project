const chai = require("chai");
const expect = chai.expect
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
        it("should contain a name property", () => {
            expect(person).to.have.property("name");
        });
        it("should contain an age property", () => {
            expect(person).to.have.property("age");
        });
    });
    context("Given a prototype.sayHello()", () => {
        it("should return a string 'Hello, person\'s name!'", () => {
            const result = person.sayHello();
            expect(result).to.be.equal(`Hello, Josh!`);
        });
    });
    context("Given a prototype.visit(otherPerson)", () => {
        it("should return 'this.name visited otherPerson'", () => {
            // Arrange
            const otherPerson = new Person("Mai", 40);
            // Act
            const result = person.visit(otherPerson);
            // Assert
            expect(result).to.equal(`Josh visited Mai`);
        })
    });
    context("Given a prototype.switchVisit(otherPerson)", () => {
        it("Will invoke the visit method and pass in the otherPerson", () => {
            // Arrange
            const otherPerson = new Person("Mai", 40);
            // Act
            const result = otherPerson.switchVisit(person)
            // Assert
            expect(result).to.equal("Mai visited Josh");
        })
    })
    context("Given a prototype.update(validObj)", () => {
        it("Should update the instance of Person to match the values of validObj", () => {
            // Arrange
            let coolPerson = new Person("George", 26);
            let validObj = { name: "Mike", age: 44 };
            // Act
            let result = coolPerson.update(validObj);
            console.log(result);
            // Assert
            expect(result).to.equal(`{ name: "Mike", age: 44 }`)
        })
    });
    context("Given a prototype.update(invalidObj)", () => {

    })
});
