'use strict';
// x = 10;
// console.log(x)

// var x;

// y = 10;
// console.log(y)

// let y = 100;

// a = 10;
// console.log(a)

// baal = 15;
// console.log(baal)

// // var ball = 5;

// let a = 10;
// a = "Text"
// a = true

// sayHi()

// function sayHi() {
//   console.log("Hello")
// }

// sayHello()

// var sayHello = function () {
//   console.log("Hello")
// }

// function greet(name) {
//   console.log("Hello", name, "Hello", name)
//   console.log(`Hello ${name}!`)
// }

// greet("John")
// greet("Jane")

// const add = function(num1, num2) {
//   console.log("Result =", num1 + num2)
// }

// add(5,10)
// add(6,4)

// add(5+3)

// let add = function(num1, num2) {
//   const result = num1 + num2
//   return result
// }

// // console.log(result)
// const res1 = add(3, 4)
// console.log(res1)
// console.log(add(5, 10))

// function reverse(text) {
//   let result = ""
//   for (let i = 0; i < text.length; i++)
//     {
//       result = text[i] + result
//     }
//   return result;
// }

// console.log(reverse("Hello"))

// function reverse2(text) {
//   let result = ""
//   for (let i = text.length-1; i >=0 ; i--)
//     {
//       result += text[i]
//     }
//   return result;
// }

// console.log(reverse2("Hello"))

// function factorial(number) {

//   if (number === 0) return 1;

//   if (isNaN(number)) return "Provide a numnber"

//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result *= i
//   }
//   return result;
// }

// console.log(factorial("text"))

// function greet(name = "Guest", age = 25) {
//   console.log("Hello", name, "age", age)
// }

// greet()

// Get 3 numbers, find the greatest among them

// function greatest(num1, num2, num3) {
//   let result;
//   if (num1 > num2 && num1 > num3) {
//     result = (`${num1} is greatest`);
//   }
//   else if (num2 > num1 && num2 > num3)
//     result = (`${num2} is greatest`);
//   else if (num3 > num1 && num3 > num2)
//     result = (`${num3} is greatest`);
//   return result;
// }

// console.log(greatest(5, 10, 8))

// Calculator

// function calculator(a, b, operator) {

//   function add (a, b) {
//     return a + b
//   }

//   const sub = function(a, b) {
//     return a - b
//   }

//   const div = function(a, b) {
//     return a / b
//   }

//   const mul = function(a, b) {
//     return a * b
//   }

//   if (operator === "+") return add(a, b);
//   if (operator === "-") return sub(a, b);
//   if (operator === "/") return div(a, b);
//   if (operator === "*") return mul(a, b);

// }

// console.log(calculator(5, 6, "*"))
// console.log(add(10, 20))

// Scoping
// Global, Function, Block
// function and var have function scope
// let and const have block scope

var globalA = 11;
let globalX = 22;

var a = 55;

function test() {
  var a = 10;
  let x = 20;

  if (true) {
    let y = 30;
    var b = 50;

    console.log(x, y, a, b);
  }

  console.log(b);
  // console.log(y)

  // console.log(a, x)
  // console.log(globalA)
}

test();
console.log(b);
// console.log(a)
// console.log(a) // Error
// console.log(x) // Error
