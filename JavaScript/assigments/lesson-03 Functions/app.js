console.log('***** Functions *****');

// ******************************

// ! 1. Write a JavaScript function that accepts an argument and returns the type.

// ? Example - 1: input= 1 => output="That is a number"
// ? Example - 2: input= "a" => output="That is a string"

// const checkType = value => {
//   let valueType = typeof value;
//   return valueType;
// };

// const input = Boolean(prompt('Enter something'));
// const input2 = +prompt('Enter something');
// const input3 = prompt('Enter something');

// const checkType2 = value => typeof value;

// function checkType3(value) {
//   return typeof value;
//   console.log(typeof value);
// }

// checkType3(input);
// console.log(checkType3(input));
// checkType3(input2);
// checkType3(input3);
// console.log(checkType2('Clarusway'));
// console.log(checkType2(8));
// console.log(checkType2(true));
// console.log(checkType2([8, 'Clarusway', true]));
// console.log(checkType2(null));
// console.log(checkType2(NaN));
// console.log(checkType2(undefined));

// ******************************

// ! 2. Write a JS code to display Perfect Numbers from 1 to 1000.
// ! A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
// ! For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

// ? Example - 1: input= 6 => output="6 is a Perfect Number"
// ? Example - 2: input= 10 => output="10 isn't a Perfect Number"

// const perfectNumbers = n => {
//   for (let i = 1; i <= n; i++) {
//     let divisors = 0;
//     for (let j = i - 1; j > 0; j--) {
//       if (i % j === 0) {
//         divisors += j;
//       }
//     }
//     if (divisors === i) {
//       console.log(i + ' is a Perfect Number!');
//     }
//   }
// };
// perfectNumbers(10000);

// const checkPerfectNumber = n => {
//   let sum = 1;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) sum += i;
//   }
//   if (n === sum && n !== 1) return true;
//   else return false;
// };

// console.log(checkPerfectNumber(6));
// console.log(checkPerfectNumber(10));
// console.log(checkPerfectNumber(28));

// ******************************

// ! 3. Write a JavaScript function to extract a specified number of characters from a string.

// ? Example: input=func("Clarusway",6) => output="Clarus"

// const extract = (str, char) => {
//   let newWord = '';
//   for (let i = 0; i < char; i++) {
//     newWord += str[i];
//   }
//   let reverseNewWord = '';
//   for (let j = newWord.length - 1; j >= 0; j--) {
//     reverseNewWord += newWord[j];
//   }
//   return reverseNewWord;
// };

// console.log(extract('Clarusway', 6));

// ******************************

// ! 4. Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
// ! The user should have 5 chance to guess the number.
// ! If the number entered by the user:
// ! is greater than the random number then warn user to decrease,
// ! is less than the random number then warn user to increase,
// ! is equal to the random number then congratulate the user and tell in how many guesses were used to find the number
// ! If user can’t find the number in 5 guess then game is lost and display the random number.

const guessingGame = () => {
  let life = 5;
  const winingNumber = Math.floor(Math.random() * 100 + 1);
  console.log(winingNumber);
  let guessedNumber;
  do {
    guessedNumber = Number(prompt('Enter a number between 1 - 100:'));
    if (guessedNumber === winingNumber) {
      console.log('Congrats you have guessed our number!');
      break;
    } else {
      console.log(`You have ${life - 1} number of lifes`);
      if (guessedNumber > winingNumber) {
        console.log('Lower');
      } else {
        console.log('Higher');
      }
    }
    life -= 1;
  } while (life > 0);

  if (life === 0) {
    console.log('Sorry but you lost. The number was: ' + winingNumber);
  }
};

guessingGame();
