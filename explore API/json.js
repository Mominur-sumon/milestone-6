

const user = {id: 1, name: 'John Doe'};
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

const stringifed = JSON.stringify(user); // '{"id":1,"name":"John Doe"}'
// console.log("Normal Object :",user);
// console.log("Stringfy :",stringifed);

const shop = {
    owner : 'Mominur',
    Address : {
        street : "Moddo Goddimary",
        City : 'Rangpur',
        Country : 'Bangladesh'
    },
    products : ['Laptop','Mobile','Tablet'],
    revenue : 100000,
    isOpen : true,
    isNew : false 
};

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObject = JSON.parse(shopJson);
console.log(shopObject);
