

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Person is sleeping ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const person1 = new Person('John', 25);
console.log(person1, typeof person1);
person1.sleep();

const person2 = new Person('Doe', 30);
console.log(person2, typeof person2);
person2.sleep();
person2.activity();