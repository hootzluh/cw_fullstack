let age = 36;

if(age > 25) {
    console.log('You are allowed...');
}

/* this is possible i fyou have only 1 statement after the if...
if(age > 25)
    console.log('You are allowed...');
*/

age > 25 && console.log('You are allowed');

let selection = +prompt('Select the level between 1 to 10. 5 is default.');

console.log(typeof selection);

console.log(selection);

selection = selection || 5;

console.log(`Level is ${selection}.`)