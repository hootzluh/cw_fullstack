console.log('***** Objects *****');

// ******************************

// ! 1. Write a JS code that counts how many vowels and constants a string has that a user entered.

// ? Example : input = "Write a JS code that counts how many vowels and constants a string has that a user entered"=> output= "This string has 25 vowels and 48 consonants"

const Vowels = ['A', 'E', 'I', 'O', 'U'];
const Consonants = [
  'B',
  'C',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// const countVovelsAndCons = (str) => {
//   let vowelsCounter = 0
//   let consCounter = 0
//   for(let i = 0; i < str.length; i++){
//     if(Vowels.includes(str[i].toUpperCase())){
//       vowelsCounter++
//     } else if (Consonants.includes(str[i].toUpperCase())){
//       consCounter++
//     }
//   }
//   return `This string has ${vowelsCounter} vowels and ${consCounter} consonants`

//   const arr = str.split("")
//   console.log(arr);
//   const result = arr.reduce((acc, element) => {
//     if(Vowels.includes(element.toUpperCase())){
//       acc.vowels += 1
//     } else if (Consonants.includes(element.toUpperCase())){
//       acc.cons += 1
//     }
//     return acc
//   }, {vowels:0, cons:0})
//   console.log(result)
//   return `This string has ${result.vowels} vowels and ${result.cons} consonants`
// }

// console.log(countVovelsAndCons("Write a JS code that counts how many vowels and constants a string has that a user entered"))

// ******************************

// ! 2. Write a JS code to copy all of the contents of obj1 to obj2 by doubling value numbers at below.

// ? Example : input = const obj1 = {'Apple': 15, 'Orange': 35, 'Melon': 20, 'Banana': 50, 'Pear': 40} => output = {'Apple': 30, 'Orange': 70, 'Melon': 40, 'Banana': 100, 'Pear': 80}

const obj1 = {'Apple': 15, 'Orange': 35, 'Melon': 20, 'Banana': 50, 'Pear': 40}

// const doubleValue = (obj) => {
//   let newObj = { ...obj }
//   console.log(newObj);
//   const keys = Object.keys(newObj)
//   for(let key of keys) {
//     newObj[key] = newObj[key] * 2
//   }
//   return newObj
//   const entries = Object.entries(obj)
//   console.log(entries)
//   const newObj = {}
//   for (let [key, value] of entries) {
//     newObj[key] = value * 2
//     console.log(newObj)
//   }
//   return newObj
// }

// console.log(doubleValue(obj1));

// ******************************

// ! 3. Write a JS code to sort by year (descending) list of used car dictionaries below.

// ? Example: input = const cars = [  { make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' },  { make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Gold' },  { make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },  { make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' }] => output = [{ make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' }, { make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' }, { make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },  { make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Gold' }]

const cars = [
{ make: 'Ford', model: 'F150 XLT', year: 2018, color: 'Gray' },
{ make: 'Porsche', model: 'Cayman GT4', year: 2016, color: 'Gold' },
{ make: 'Audi', model: 'S7 Prestige', year: 2017, color: 'Blue' },
{ make: 'Mercedes', model: 'S550', year: 2019, color: 'Black' }
]

// const yearSort = arr => {
//   return arr.sort((first, second) => second.year - first.year)
// }

// function sortYear(cars) {
//  return cars.sort(function(a, b) {
//   if(a.year > b.year) return 1;
//   if(a.year < b.year) return -1;
//   return 0;
//   });
// }

// console.log(yearSort(cars))
// console.log(sortYear(cars))

// ******************************

// ! 4. To test a code, an object with students, lessons, and exam results of that lesson is needed. Write a JS code to generate the sample object below with random numbers between 35 and 100.

// ? Example: output=  {'Student-1': {'Lesson-1': 73, 'Lesson-2': 82, 'Lesson-3': 43, 'Lesson-4': 88, 'Lesson-5': 92}, 'Student-2': {'Lesson-1': 36, 'Lesson-2': 99, 'Lesson-3': 56, 'Lesson-4': 56, 'Lesson-5': 96}, 'Student-3': {'Lesson-1': 44, 'Lesson-2': 66, 'Lesson-3': 73, 'Lesson-4': 66, 'Lesson-5': 90}, 'Student-4': {'Lesson-1': 46, 'Lesson-2': 92, 'Lesson-3': 63, 'Lesson-4': 98, 'Lesson-5': 86}, 'Student-5': {'Lesson-1': 37, 'Lesson-2': 75, 'Lesson-3': 76, 'Lesson-4': 89, 'Lesson-5': 52}}

// const examResults = () => {
//   const result = {}
//   for (let i = 1; i <= 5; i++){
//     result[`Student - ${i}`] = {}
//     for (let j = 1; j <= 5; j++) {
//       result[`Student - ${i}`][`Lesson - ${j}`] = Math.ceil(Math.random() * 65 + 35)
//     }
//   }
//   return result
// }

// const randomNumber = Math.random() * 65 + 35
// console.log(randomNumber)
// console.log(Math.ceil(randomNumber))
// console.log(Math.round(randomNumber))
// console.log(Math.floor(randomNumber))
// console.log(examResults())

// ******************************

// ! 5. Write a JavaScript function to check whether an object contains given property

// ? Example - 1 : input = const student = { name: 'David Rayy', sclass: 'VI', rollno: 12,// }, "name"=> output= true
// ? Example - 2 : input =  const student = { name: 'David Rayy', sclass: 'VI', rollno: 12,// }, "score"=> output= false

const student = { name: 'David Rayy', sclass: 'VI', rollno: 12 }

const checkProperty = (obj, property) =>{
  // const keys =  Object.keys(obj)
  // console.log(keys)
  // return keys.includes(property)
  // return obj.hasOwnProperty(property)
  return Boolean(obj?.[property])
}

console.log(student.score);
console.log(student.sclass);

console.log(checkProperty(student, "sclass"));
console.log(checkProperty(student, "score"));