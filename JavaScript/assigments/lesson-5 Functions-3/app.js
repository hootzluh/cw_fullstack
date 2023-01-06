console.log('***** Functions *****');

// ******************************

// ! 1. Write a JavaScript function which returns the n rows by n columns identity matrix.

// ? Example: input=4 => output=
// ? 1
// ? 0
// ? 0
// ? 0
// ?----------
// ? 0
// ? 1
// ? 0
// ? 0
// ?----------
// ? 0
// ? 0
// ? 1
// ? 0
// ?----------
// ? 0
// ? 0
// ? 0
// ? 1
// ?----------

// const matrix = n => {
//   for (let i = 0; i < n; i++) {
//     let column = '';
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         column += '1';
//       } else {
//         column += '0';
//       }
//     }
//     console.log(column);
//     console.log('----------');
//   }
// };

// matrix(4);

// ******************************

// ! 2. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

// ? Example: input= (2, 3) => output=8

// function power(n, exp) {
//   let newNum = 1;
//   for (let i = 1; i <= exp; i++) {
//     newNum *= n;
//   }
//   return newNum;
// }

// console.log(power(5, 4));

// ******************************

// ! 3. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

// ? Example: input=("Connect") => output="tonnecC"

const changePosition = str => {
  if (str.length === 1) {
    return str;
  } else {
    const start = str[0];
    const end = str[str.length - 1];
    let middle = '';
    for (let i = 1; i < str.length - 1; i++) {
      middle += str[i];
    }
    let newStr = end + middle + start;
    return newStr;
  }
};

console.log(changePosition('Connect'));
console.log(changePosition('ab'));
console.log(changePosition('a'));
