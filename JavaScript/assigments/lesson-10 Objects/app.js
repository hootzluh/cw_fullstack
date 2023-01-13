console.log('***** Objects *****');

// ******************************

// ! 1. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// ? Example: input = const numbers = [1, -4, 12, 0, -3, 29, -150] => output = 42

// const numbers = [1, -4, 12, 0, -3, 29, -150]

// const positivesAddUp = (arr) => {
//     return arr.filter((num) => num > 0).reduce((accumulator, currentValue) => {
//         console.log(accumulator)
//         console.log(currentValue)
//         console.log("--------");
//         return accumulator + currentValue
//     }, 0)
// }

// console.log(positivesAddUp(numbers));

// ******************************

// ! 2. Write a JS code that calculates the average of scores that students took in a math class below.

// ? Example: input = const scores = {  Mary: 85,  Susan: 75,  Barry: 65,  Alexis: 88,  Jane: 45,  Tina: 100,  Tom: 90,  Tim: 60,}  => output = 76

// const scores = {  Mary: 85,  Susan: 75,  Barry: 65,  Alexis: 88,  Jane: 45,  Tina: 100,  Tom: 90,  Tim: 60,}

// const averageGrade = (obj) => {
//     const grades = Object.values(obj)
//     console.log(grades)
//     const sum = grades.reduce((acc, num) => acc + num, 0)
//     console.log(sum);
//     const average = sum / grades.length
//     return average
// }

// console.log(averageGrade(scores));

// ******************************

// ! 3. Write a JS code to display the repetition number of each character in a string.

// ? Example: input = "www.clarusway.com" => output = {'w': 4, '.': 2, 'c': 2, 'l': 1, 'a': 2, 'r': 1, 'u': 1, 's': 1, 'y': 1, 'o': 1, 'm': 1}

// const text = "www.clarusway.com"

// const letterCounter = (str) => {
//     const newArr = str.split("")
//     console.log(newArr)
//     const newObj = newArr.reduce((acc, letter) => {
//         if (acc[letter]){
//             acc[letter]++
//         } else{
//             acc[letter] = 1
//         }
//         acc[letter] ? acc[letter]++ : (acc[letter] = 1)
//         return acc
//     }, {})
//     return newObj
// }

// console.log(letterCounter(text))


// ******************************

// ! 4. Write a JS code to find the numbers that are greater than 150 in the text below, and sort these numbers.

// ? Example: input= 'Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.' => output= [167, 1976, 1981]

// const text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances."

// const checkAndSortNum = (str) => {
//     const values = str.split(" ")
//     console.log(values);
//     const numbers = []
    // for(let i = 0; i < values.length; i++){
    //     if(!(isNaN(values[i]))) numbers.push(Number(values[i]))
    // }
//     values.forEach((elemnts) => {
//         if(!(isNaN(elemnts))) numbers.push(Number(elemnts))
//     })
//     console.log(numbers)
//     return numbers.filter(number => number > 150).sort((a, b) => a - b)
    // ! return values.filter(number => number > 150).sort((a, b) => a - b)
// }

// console.log(checkAndSortNum(text));