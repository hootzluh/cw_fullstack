const balance = 75;

let withdraw = +prompt("How much do you want to withdraw? ");

/*
/// The ternary aproach:

let result = balance >= withdraw ? 'Here is your money...' : 'Sorry but you don\'t have enough in your balance.';

*/

let result = '';

if(balance >= withdraw){
    result = 'Here is your money...';
} else {
    result = 'Sorry but you don\'t have enough in your balance.';
}


console.log(result);