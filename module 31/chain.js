
// data access

const data = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
    }
]
console.log(data[0].name) // John Doe

const products ={
    1: {
        name: 'Product 1',
        price: 50,
    },
    2: {
        name: 'Product 2',
        price: 100,
    }
}
console.log(products[1].name) // Product 1
console.log(products[2].price) // 100;

const user = {
    id : 2001,
    name : 'vondo',
    address: {
        street :{
            name : '123 Main St',
            city : 'New York'
        },
        zipcode : '10001',
        country : 'USA'	
    }
}

console.log(user.address.street.city) // New York
// if we want to access the city name we can do it by chaining the properties
// user -> address -> street -> city
// user.address.street.city
// if we don't have the street property in the address object then it will throw an error and we can use an ? to avoid the error
console.log(user.address.street?.city) // New York