console.log('***** Arrays *****');

// ******************************

// ! 1. Write a simple JavaScript program to join all elements of the following array into a string.

// ? Example: input =  ['Red', 'Green', 'White', 'Black']   => output= "Red,Green,White,Black"

// const myColors = ['Red', 'Green', 'White', 'Black'];

// console.log(myColors.join(','));

// const joinElements = arr => {
//   let newStr = '';
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//       newStr += arr[i];
//     } else {
//       newStr += arr[i] + ', ';
//     }
//   }
//   return newStr;
// };

// console.log(joinElements(myColors));

// ******************************

// ! 2. Write a JavaScript program to sort the items of an array.

// ? Example: input = [-3, 8, 7, 6, 5, -4, 3, 2, 1]  => output = [-4, -3, 1, 2, 3, 5, 6, 7, 8]

// const numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// console.log(numbers.sort((a, b) => a - b));

// const sortElements = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log(sortElements(numbers));
// ******************************

// ! 3. Write a JavaScript program to find the most frequent item of an array.

// ? Example: input = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] => output = "a is repeated most"

// const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// function checkFrequent(arr) {
//   let mostFrequent;
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 1;
//     for (let j = arr.length - 1; j > i; j--) {
//       if (arr[i] === arr[j]) {
//         counter += 1;
//       }
//     }
//     if (counter > highest) {
//       highest = counter;
//       mostFrequent = arr[i];
//     }
//   }
//   return `Most frequent element in our array is ${mostFrequent} with ${highest} times`;
// }

// console.log(checkFrequent(array));

// ******************************

// ! 4. Given a list of numbers and a number k, return whether any two numbers from the list add up to k

// ? Example: input = [10, 15, 3, 7], k = 17 => output = true

const numbers = [10, 15, 3, 8, 10];
const k = 20;

const checkSum = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkSum(numbers, k));

const addUp = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(num - arr[i]) && num - arr[i] !== 0) {
      console.log(i, arr[i]);
      return true;
    }
  }
  return false;
};

console.log(addUp(numbers, k));
