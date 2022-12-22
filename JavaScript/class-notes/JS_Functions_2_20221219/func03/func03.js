console.log('Exercise - 01');

const convert = (amount, rate) => amount * rate;

console.log(convert(1000, 1.5))

/////////////////////////////////////////////////

console.log('Exercise - 02');

const counter = (text, char) =>{
    let count = 0;

    for(let i = 0 ; i < text.length; i++){
        if(text[i] === char){
            count++;
        }
    }

    return count;
}

console.log(counter('Clarusway is the best', 's'));
console.log(counter('Clarusway is the best', 'a'));

/////////////////////////////////////////////////

console.log('Exercise - 03');

const primeOrNot = (num) => {

    if(num < 2){
        return false;
    } 

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

/*

num = 7; 
i = 7

7 % 7 ?= 0


*/

console.log(primeOrNot(101));