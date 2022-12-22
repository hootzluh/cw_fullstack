console.log('***** Basic *****');

// ******************************

//! 1. Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference

//? Example1: num = 3; output => 20 - 3 = 17
//? Example2: num = 30; output => (30 - 20) * 2 = 20

// const number = Number(prompt('Enter a number: '));

// if (number <= 20) {
//   console.log(20 - number);
// } else if (number > 20) {
//   console.log((number - 20) * 2);
// } else {
//   console.log('Please enter a number');
// }

// ******************************

//! 2. Write a JavaScript program that takes 3 integers from a user and displays the largest

// ? Example: num1 = 3, num2 = 4, num3 = 5; output => "num3 is the largest"

// const num1 = 30;
// const num2 = 60;
// const num3 = 50;

// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is the greatest number`);
// } else if (num2 > num3 && num2 > num1) {
//   console.log(`${num2} is the greatest number`);
// } else if (num3 > num2 && num3 > num1) {
//   console.log(`${num3} is the greatest number`);
// } else if (num2 === num3 || num2 === num1 || num3 === num1) {
//   console.log('Please enter different values');
// } else {
//   console.log('Please enter a number');
// }

// ******************************

//! 3. Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product.

// ? Example-1: num1 = 3, num2 = 4, num3 = 5; output => solution:"3*4*5=60" sign"+"
// ? Example-2: num1 = 5, num2 = -6, num3 = 2; output => solution:"5*-6*2=-60" sign"-"

// const num1 = 6;
// const num2 = 6;
// const num3 = 5;

// const product = num1 * num2 * num3;

// console.log(product);

// if (product > 0) {
//   console.log("sign is '+'");
// } else if (product < 0) {
//   console.log("sign is '-'");
// } else if (product === 0) {
//   console.log('Product is 0');
// } else {
//   console.log('Please enter a number');
// }

// ******************************

//! 4. Write a JavaScript program to check whether a given integer is in the range 50 to 100.

// ? Example1: num = 25; output => "25 is not in the range of 50 to 100"
// ? Example2: num = 75; output => "75 is in the range of 50 to 100"

// const number = 25;

// if (number >= 50 && number <= 100) {
//   console.log(`${number} is in the range of 50 to 100`);
// } else if (number < 50 || number > 100) {
//   console.log(`${number} is not in the range of 50 to 100`);
// } else {
//   console.log('Please enter a number');
// }

// ******************************

//! 5. Write a JavaScript program to find a value that is nearest to 100 from two different given integer

// ? Example: num-1 = -25, num-2=275 ; output => "num-1 is closer to the 100"

// const num1 = 125;
// const num2 = 175;

// const difference1 = num1 <= 100 ? 100 - num1 : num1 - 100;
// const difference2 = num2 <= 100 ? 100 - num2 : num2 - 100;

// console.log(difference1);
// console.log(difference2);

// if (difference1 < difference2) {
//   console.log(`${num1} is closer to 100`);
// } else if (difference1 > difference2) {
//   console.log(`${num2} is closer to 100`);
// } else if (difference1 === difference2) {
//   console.log(`${num1} and ${num2} have the same distance to 100`);
// } else {
//   console.log('Please enter a number');
// }

// ******************************

//! 6. Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.

// ? Example-1: day = "Wednesday"; output => "Wednesday is a weekday"
// ? Example-2: day = "Saturday"; output => "Saturday is not a weekday"

// const day = 'Saturday';

// switch (day.toLowerCase()) {
//   case 'monday':
//   case 'tuesday':
//   case 'wednesday':
//   case 'thursday':
//   case 'friday':
//     console.log(`${day} is a weekday`);
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log(`${day} is not a weekday`);
//     break;
//   default:
//     console.log(`${day} is not a day`);
//     break;
// }

// ******************************

//! 7. Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.

// ? Example1: num1 = 3, num2 = 4, operand = *; output => 3 * 4 = 12
// ? Example2: num1 = 8, num2 = 2, operand = /; output => 8 / 2 = 4
// ? Example3: num1 = 32, num2 = 14, operand = -; output => 32 - 14 = 18
// ? Example4: num1 = 18, num2 = 41, operand = +; output => 18 + 41 = 59

const num1 = 5;
const num2 = 6;
const operand = '*';

switch (operand) {
  case '+':
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case '-':
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case '/':
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  case '*':
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  default:
    console.log('Enter a correct operand (+, -, *, /)');
    break;
}
