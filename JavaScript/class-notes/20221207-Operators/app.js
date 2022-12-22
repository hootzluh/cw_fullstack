// console.log('test connection');

// console.log(5 + 6);
// console.log(5 * 6);
// console.log(9 % 2);

// let x = 10;
// // ++ inrement does increment after every expression handled
// let y = x++;

// console.log(y);
// console.log(x);

// let a = 10;
// let b = --a;

// console.log(b);

// let x = 10;
// let y = 10;

// console.log(x == y);
// console.log(x != y);

// let a = 10;
// let b = '10';

// console.log(a === b);
// console.log(a !== b);

// let x = 10;
// console.log(Boolean(x));
// console.log(!!x);

// let text = 'Hello';
// console.log(!text);
// let y = 0;
// console.log(!y);

// x is in between 5 and 15
// let x = 10;
// console.log(x > 5 && x < 15);

// let x = 11;
// // checking odd numbers
// console.log(x % 2 == 1);
// console.log(Boolean(x % 2));

// // checking even number
// console.log(x % 2 == 0);
// console.log(!(x % 2));

// // divisible by 5
// let x = prompt('Enter a number');
// console.log(x % 5 == 0);

// // are you at risk?
// const cigarette = confirm('Do you smoke?');
// const alcohol = confirm('Do you take alcohol?');
// const age = confirm('Are you older than 65?');

// const risk = cigarette || alcohol || age;
// console.log(risk);

// // check password and username matches
// const username = 'clarusway';
// const password = '12345';

// const usernameEntered = prompt('Enter username: ');
// const passwordEntered = prompt('Enter password: ');

// const isAuthenticated =
//   username === usernameEntered && password === passwordEntered;
// console.log(isAuthenticated);

// // check age in between 25-30
// const age = prompt('Enter your age?');
// const check = age >= 25 && age <= 30;
// console.log(check);

// console.log((check && 'You can take test') || 'You are not eligible!');

// type conversion
// let x = 12;
// let y = '12';

// console.log(x + y); // join
// // x into string and join 2 strings

// console.log(x * y);
// // automaticlally into number

// console.log(x + Number(y));
// console.log(x + parseInt(y));
// console.log(x + parseFloat(y));
// console.log(x + +y);

// const age = prompt('Enter your age!');
// console.log(age, typeof age);

// const age2 = +prompt('Enter your age!');
// console.log(age2, typeof age2);

// Not a Number NaN

let y = 'text';
console.log(Number(y));

const age = Number(prompt('Enter your age'));
console.log(age);
console.log(isNaN(age));
