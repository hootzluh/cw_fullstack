// Import data from external js files 
import users from './users.js';
import products from './products.js';
import todos from './todos.js';

// Task 1 - Filter the users that lives in Gwenborough and create a new array that consists of strings in "username - name" format

const selectedUsers  = users.filter(user => user.city === 'Gwenborough');
const result = selectedUsers.map(user => `${user.username} - ${user.name}`);
// const result = users.filter(user => user.city === 'Gwenborough')
//   .map(user => `${user.username} - ${user.name}`)

// console.log(result);
// Task 2 - Find the count of all users with the name "Kurtis Weissnat"

// const user = users.filter((user) => user.name === "Kurtis Weissnat");
// console.log(user);         //[{}, {}, {}]
// console.log(user[0]);      // {city:..., name:..., }
// console.log(user[0].city)  // Howemouth
// console.log(user[0]['city'])
// console.log(user[0].username)


// const user = users.find((user) => user.name === "Kurtis Weissnat")
// console.log(user);  //{city:.., name: ..}
// const userCity = user.city;
// console.log(userCity);


// Task - 3  Implement discount by discountPercentage,
// Calculate all new prices and put all new prices in a new array
let  prices = products.map(prod => +(prod.price * (100 - prod.discountPercentage) / 100).toFixed(3));
prices = prices.filter(price => price <= 100);

// console.log(prices);

// Task - 4
// Check the stocks fo find low stock number that is less than 40
// store in array in a format 'brand - title'
let stock = products.filter(prod => prod.stock < 40)
stock = stock.map(prod=> `${prod.brand} - ${prod.title}`)
// console.log(stock);

// Task-5
// Find how many products on laptop category
const laptopsCount = products.filter(prod => prod.category === 'laptops').length;
console.log(laptopsCount);

// forEach
// let count = 0;
// products.forEach(product => {
//   if (product.category === 'laptops') count++;
// })

// console.log(count)
// Using for loop 
let count = 0;
for (let i = 0; i < products.length; i++) { 
  if (products[i].category === 'laptops')
    count++;
}
// console.log(count)



// Task 6  List of unique categories
// const categories = [];

// products.forEach(prod => {
//   if (!categories.includes(prod.category))
//     categories.push(prod.category)
// })

// console.log(categories)

let categories = products.map(prod => prod.category);  
categories = [...new Set(categories)]   
console.log(categories);

// Task 7 - get the total price of all products 
let total = 0;
products.forEach(prod => { 
  total += prod.price;
})


// total = products.reduce((total, prod) => total + prod.price, 0)

// let productsList = products.reduce((list, prod)=> `${list+prod.title} `, '')
// console.log(total);
// console.log(productsList)

// Task 7 dort products desc. by price
// products.sort((a, b) => b.price - a.price)

// // sort by rating
// products.sort((a, b) => a.rating - b.rating)
// console.log(products)



// let arr = ['apple', 'orange', 'Grapes', 'banana', 'Watermelon'];

// arr.sort();

// arr.sort((a,b)=>b.localeCompare(a))
// console.log(arr);


// products.sort((a, b) => b.title.localeCompare(a.title));
// console.log(products)

const output = users.filter((user) => user.city !== "Gwenborough")
  .sort((a, b) => a.username.localeCompare(b.username))

console.log(output);