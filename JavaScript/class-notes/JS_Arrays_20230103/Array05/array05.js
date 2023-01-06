let arr = ['banana', 'milk', 'bread', 'orange' ];
console.log(arr);

/*
let removedItems = arr.splice(1,2); 
// remove 2 items starting from index 1 (index 1 is included)
*/


/*
let removedItems = arr.splice(1,2,'ice cream', 'candies'); 
// after removing the items at the indexes 1 and 2
// add new items starting from index 1
*/

arr.splice(2,0,'ice cream', 'candies');


//console.log(removedItems);

console.log(arr);

// replacement of shift()
// arr.splice(0,1);

// replacement of unshift()
// arr.splice(0,0, 'cake');

// replacement of pop()
// arr.splice(arr.length - 1, 1)

// replacement of push()
// arr.splice(arr.length, 0, 'cake');


console.log(arr);