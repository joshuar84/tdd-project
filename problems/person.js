class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello, ${this.name}!`
    }
    visit(otherPerson) {
        return `${this.name} visited ${otherPerson.name}`;
    }
    switchVisit(newPerson) {
        return `${this.name} visited ${newPerson.name}`;
    }
    update(obj) {
        this.name = obj.name;
        this.age = obj.age;
        return `${this}`;
    }
}


module.exports = Person;
