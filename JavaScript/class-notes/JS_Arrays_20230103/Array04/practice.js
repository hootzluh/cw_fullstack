const arr1 = ['red', 'blue', 'purple', 'white', 'orange'];

console.log(arr1);

let first = arr1.shift(); // removes from the beginning
let last = arr1.pop(); // removes from the end

arr1.push(first); // adds to the end
arr1.unshift(last); // adds to the head

console.log(arr1);

//console.log(arr1.slice(1));
let newSubSet = arr1.slice(1,4);
console.log(newSubSet);

console.log(arr1);

/*
'orange', 'blue', 'purple', 'white', 'red'
    0        1       2         3       4

slice(1,3) -> generate a new array that starts from index 1
              up until (but not included) index 3

*/