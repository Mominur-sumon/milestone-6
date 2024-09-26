

const products = [
    { Id: 1, name: 'laptop', price: 1000 },
    { Id: 2, name: 'smartphone', price: 500 },
    { Id: 3, name: 'watch', price: 100 },
    { Id: 4, name: 'tablet', price: 150 },
    { Id: 5, name: 'headphone', price: 50 },
    { Id: 6, name: 'keyboard', price: 25 },
    { Id: 7, name: 'mouse', price: 10 },
    { Id: 8, name: 'charger', price: 5 },
    { Id: 9, name: 'usb cable', price: 2 },
    { Id: 10, name: 'power bank', price: 20 }
];


// class has some prperties and methods
class Product{
    constructor(Id, name, price){
        this.Id = Id;
        this.name = name;
        this.price = price;
    }
};

const products1 = [
    new Product(1, 'laptop', 1000),
    new Product(2, 'smartphone', 500),
    new Product(3, 'watch', 100),
    new Product(4, 'tablet', 150),
    new Product(5, 'headphone', 50),
    new Product(6, 'keyboard', 25),
    new Product(7, 'mouse', 10),
    new Product(8, 'charger', 5),
    new Product(9, 'usb cable', 2),
    new Product(10, 'power bank', 20)
];

// const productName = products.map(product => product.name);
// console.log(productName);

class Teacher {
    constructor(name, subject){
        this.name = name ;
        this.subject = subject;
    }
    lecture(){
        console.log("sir is teaching Math");
    }
}

const john = new Teacher('John', 'Math');
console.log(john);

john.lecture();

