
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

const productName = products.map(product => product.name);
console.log(productName);

const productPrice = products.map(product => product.price);
console.log(productPrice);

const productPriceWithVat = products.map(product => (product.price * 1.15).toFixed(2));
console.log(productPriceWithVat);

const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);

// finds 
const firstExpensiveProduct = products.find(product => product.price < 100);
console.log(firstExpensiveProduct);

// reduce 
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // 1862