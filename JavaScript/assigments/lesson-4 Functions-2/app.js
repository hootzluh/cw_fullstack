console.log('***** Functions *****');

// ******************************

// ! 1. Write a JavaScript function that generates a string id (specified length) of random characters.

const char_list =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// ? Example - 1: input=4 => output="A8Sf"
// ? Example - 2: input=8=> output="29SaBfgu"

// const randomString = n => {
//   let newString = '';
//   let randomNumber;
//   for (let i = 1; i <= n; i++) {
//     randomNumber = Math.floor(Math.random() * char_list.length);
//     console.log(randomNumber);
//     newString += char_list[randomNumber];
//     console.log(newString);
//   }
//   return newString;
// };

// console.log(randomString(3));

// ******************************

// ! 2. Write a function to find the area and perimeter of a Circle
// ! Perimeter is 2*pi*rad
// ! Area is pi*rad^2

// ? Example - 1: input= 10 => output="Perimeter: 62.83, Area: 314.15"
// ? Example - 2: input= 15 => output="Perimeter: 94.94, Area: 706.84"

// const circleValues = rad => {
//   const perimeter = 2 * 3.14 * rad;
//   const area = 3.14 * rad ** 2;
//   return `Perimeter: ${perimeter}, Area: ${area}`;
// };

// console.log(circleValues(10));
// console.log(circleValues(15));

// ******************************

// ! 3. Write a function to find the count of a specific letter in a string

// ? Example: input=("Connect",c) => output=2
// ? Example: input=("first person",s) => output=2

// const charCount = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === char.toLowerCase()) count++;
//   }
//   return count;
// };

// console.log(charCount('Connect', 'c'));
// console.log(charCount('first person shooter', 'S'));

// ******************************

// ! 4. Write a function to convert Celsius to Fahrenheit or Fahrenheit to Celsius according to the input.

// ? Example -1: input=(20, "C") => output="68F"
// ? Example - 2: input=(104, "F")=> output="40C"

// const convert = (deg, unit) => {
//   if (Number(deg)) {
//     if (unit.toLowerCase() === 'c') {
//       return (deg * 9) / 5 + 32;
//     } else if (unit.toLowerCase() === 'f') {
//       return ((deg - 32) * 5) / 9;
//     } else {
//       return 'Enter the unit correctly. C / F';
//     }
//   } else {
//     return 'Enter a number for the degree';
//   }
// };

const celToFar = deg => {
  return (deg * 9) / 5 + 32;
};

const farToCel = deg => {
  return ((deg - 32) * 5) / 9;
};

const converter = (deg, unit) => {
  if (unit.toLowerCase() === 'c') {
    return celToFar(deg);
  } else if (unit.toLowerCase() === 'f') {
    return farToCel(deg);
  }
};

console.log(converter(20, 'C'));
console.log(converter(68, 'F'));
