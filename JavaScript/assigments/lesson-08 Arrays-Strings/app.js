console.log('***** Arrays / Strings *****');

// ******************************

// ! 1. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

// ? Example: input =  func(“Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.”, “the”)   => output= “Full stack developers handle both frontend and backend of an app or a website. It even needs to have knowledge about the database.”

// const firstOccurance = (str, word) => {
//     const position = str.search(word)
//     const newStr = str.slice(0, position) + str.slice(position + word.length).trim()
//     return newStr
//     str = str.replace(word + " ", "")
//     return str
// }

// console.log(firstOccurance("Clarusway is the best bootcamp", "the"))

// ******************************

// ! 2. Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.

// ? Example: input =  '025468' => output = `0 - 254 - 6 - 8'

// const evenDash = (str) => {
//     let number = ""
//     for (let i = 0; i < str.length; i++){
//         if(str[i] % 2 === 0 && str[i + 1] % 2 === 0){
//             number += str[i] + "-"
//         } else{
//             number += str[i]
//         }
//     }
//     return number
// }

// console.log(evenDash("0254685646"));

// ******************************

// ! 3. Write a JavaScript program that accepts a string as input and swap the case of each character.

// ? Example: input = 'The Quick Brown Fox' => output = 'tHE qUICK bROWN fOX'

// const swapCase = (str) => {
//     let newStr = ""
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str[i].toUpperCase()){
//             newStr += str[i].toLowerCase()
//         } else {
//             newStr += str[i].toUpperCase()
//         }
//     }
//     for(let i = 0; i < str.length; i++){
//         newStr += str[i] === str[i].toUpperCase()
//         ? str[i].toLowerCase()
//         : str[i].toUpperCase()
//     }
//     return newStr
// }

// console.log(swapCase("The Quick Brown Fox Run 8 Miles"))

// ******************************

// ! 4. Write a JavaScript function to find the difference of two arrays

// ? Example: input = difference([1, 2, 3], [100, 2, 1, 10]) => output = ["3", "10", "100"]

const differenceOf2Arrays = (arr1, arr2) => {
    let difArr = []
    arr1 = (arr1.toString().split(","));
    arr2 = (arr2.toString().split(","));
    for(let i in arr1){
        if(arr2.indexOf(arr1[i]) === -1) difArr.push(arr1[i])
    }
    for(let i in arr2){
        if(arr1.indexOf(arr2[i]) === -1) difArr.push(arr2[i])
    }
    return difArr
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]))
console.log(differenceOf2Arrays([1, 2, 3, 4, 5, 7], [1, [2], [3, [4]], [5, 6]]))
