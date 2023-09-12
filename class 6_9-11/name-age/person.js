class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello ${this.name}, let's do science!! on you!`)
    }

    eligibleForExperiment(experiment) {
        return this.age >= experiment.minimumAge && this.age <= experiment.maximumAge
    }
}

class YoungPerson extends Person {

    greet() {
        console.log(`Hello ${this.name}, I can't wait to do experiments on you`)
    }
}

class OlderPerson extends Person {
    greet() {
        console.log(`Hello ${this.name}, unfortunately we are not studying your demographic, please hold`)
    }
}

export class PersonFactory {
    static create(name, age) {
        if (age > 18 && age < 66) {
            return new Person(name, age)
        } else if (age > 65) {
            return new OlderPerson(name, age)
        } else {
            return new YoungPerson(name, age)
        }
    }
}