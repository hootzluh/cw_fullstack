// const testing = function () {
//     console.log('Here I am');
// }

const testing = ((me = 'Developer') => `Here is ${me}...`)('User');


console.log(testing);

// callback functions
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;
const mul = (num1, num2) => num1 * num2;
const pow = (num1, num2) => num1 ** num2; 

// higher order functions
const calculator = (num1, num2, process) => process(num1, num2);

console.log(calculator(25 , 5 , add));
console.log(add(25 , 5));


console.log(calculator(25 , 5 , sub));
console.log(calculator(25 , 5 , div));
console.log(calculator(25 , 5 , mul));
console.log(calculator(2 , 5 , pow));

