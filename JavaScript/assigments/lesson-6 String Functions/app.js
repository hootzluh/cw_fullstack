console.log('***** String Functions *****');

// ******************************

// ! 1. Write a JavaScript function to convert a string into an abbreviated form.

// ? Example - 1: input = “John Doe”  => output= "John D."
// ? Example - 2: input = “John”  => output= "John"
// ? Example - 3: input = “John Doe Marcus”  => output= "John D."

// function abbreviateString(str) {
//   //   let newStr = str.split(' ');
//   //   console.log(newStr);
//   //   if (newStr.length > 1) {
//   //     newStr = newStr[0].concat(' ', newStr[1][0], '.');
//   //     return newStr;
//   //   } else {
//   //     return str;
//   //   }
//   const position = str.search(' ');
//   if (position === -1) {
//     return str;
//   }
//   const name = str.slice(0, position);
//   const abb = str[position + 1];
//   return name + ' ' + abb + '.';
// }

// console.log(abbreviateString('John Doe'));
// console.log(abbreviateString('John'));
// console.log(abbreviateString('Johnny Marcus Doe'));

// ******************************

// ! 2. Write a JavaScript function to hide email addresses to protect them from unauthorized users. Hint: Just display half of the characters before the @ sign in the email address

// ? Example: input = "nurettin@clarusway.com" => output = "nur*****@clarusway"

// function protection(email) {
//   const position = email.search('@');
//   const name = email.slice(0, position);
//   const mail = email.slice(position);
//   const average = Math.floor(name.length / 2);
//   const newName = name.slice(0, average);
//   let stars = '*';
//   stars = stars.repeat(name.length - average);
//   return newName + stars + mail;
// }

// console.log(protection('nurettin@clarusway.com'));
// console.log(protection('barry@clarusway.com'));

// ******************************

// ! 3. Write a JavaScript function to convert a string into a title format (The first letters of each word should be in capital letters)

// ? Example: input = 'CLARUSWAY is a bOoTcAmP' => output = "Clarusway Is A Bootcamp"

// function titleFormat(str) {
//   //   let title = '';
//   //   let convert = true;
//   //   for (let i = 0; i < str.length; i++) {
//   //     if (convert) {
//   //       title += str[i].toUpperCase();
//   //       convert = false;
//   //     } else {
//   //       title += str[i].toLowerCase();
//   //     }
//   //     if (str[i] === ' ') {
//   //       convert = true;
//   //     }
//   //   }
//   //   return title;
//   const words = str.split(' ');
//   let title = '';
//   for (let i = 0; i < words.length; i++) {
//     title += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
//   }
//   return title.trim();
// }

// console.log(titleFormat('CLARUSWAY is a bOoTcAmP'));
