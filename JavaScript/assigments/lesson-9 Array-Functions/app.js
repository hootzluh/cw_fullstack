console.log('***** Arrays Functions *****');

// ******************************

// ! 1. Write a JS code to filter strings that have more than 5 characters in the list below.

// ? Example: input = const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish'] => output = ["elephant", "desert",  "pumpkin"]

// const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish']

// const charCount = (arr) => {
//     console.log(arr.filter((word)  =>  word.length > 5));
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > 5) newArr.push(arr[i])
//     }
//     return newArr
//     const length = (word) => {
//         if(word.length > 5) return word
//     }
//     return arr.filter((word) => length(word))
// }

// console.log(charCount(words))

// ******************************

// ! 2. Write a JavaScript program to find duplicate values in a array.

// ? Example: input = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6] => output = ["4", "7"]

// const numbers = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]

// const findDublicateInArray = (arr) => {
//     let newArr = []
//     arr.forEach((item, index) => {
//         if((arr.indexOf(item) !== index) && !(newArr.includes(item)) ) newArr.push(item)
//     })
//     return newArr
// }

// console.log(findDublicateInArray(numbers));

// ******************************

// ! 3. Write a JavaScript program that square the value of every element in the array.

// ? Example: input = [1, 2, 3, 4, 5] => output = [1, 4, 9, 16, 25]

// const numbers = [1, 2, 3, 4, 5]
// const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish']

// const squares = numbers.map((number) => {
//     if(number > 2)
//     return number**2
// })
// const squares = numbers.map((number) => number**2)
// console.log(squares)

// const html_elemnts = words.map(item => `<h1>${item}</h1>`)
// console.log(html_elemnts);

// ******************************

// ! 4. he given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// ? Example: input = "George Raymond Richard Martin" => output = "GRRM"

// const name = "George Raymond Richard Martin"

// const initials = (str) => {
//     const newArr = str.split(" ")
//     console.log(newArr)
//     console.log(newArr.map((elemnt) => elemnt[0]))
//     return newArr.map((elemnt) => elemnt[0]).join("")
// }
// console.log(initials(name))

// const name = "George Raymond Richard Martin";
// console.log(name.replace(/[^A-Z]/g, ""));
// const initials = name.replace(/[^A-Z]/g, "").split("").join("");
// console.log(initials);

