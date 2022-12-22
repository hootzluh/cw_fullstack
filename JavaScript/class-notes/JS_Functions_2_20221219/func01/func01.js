function oldSchool(pre, uname){
    console.log(`Good morning ${pre}.${uname}`);
}

oldSchool('Mr', 'Jhon');

const newApp = (pre, uname) => {
    console.log(`Good morning ${pre}.${uname}`);
}

newApp('Mrs', 'Smith');

//////////////////////////

function addOS(num1, num2){
    let result = num1 + num2;
    return result;
}

console.log(addOS(5,8));

const addNA = (num1, num2) => num1 + num2;

console.log(addNA(7,3));


////////////////

const findMaxNA = (num1, num2) => num1 > num2 ? num1 : num2;

function findMaxOS(num1, num2){
    return num1 > num2 ? num1 : num2;
}

console.log(findMaxNA(5,8));
console.log(findMaxOS(5,8));

///////////////////

// function oddOrEven(num){
//     return num % 2 ? 'ODD' : 'EVEN';
// }

const oddOrEven = (num) => num % 2 ? 'ODD' : 'EVEN';

console.log(oddOrEven(7));


///////////////////

function check(smoking, alcohol, over65){
    // v1.0

    // if(smoking || alcohol || over65){
    //     return 'There is risk';
    // }else{
    //     return 'There is no risk';
    // }


    // v1.1
    //    let answer =  smoking || alcohol || over65 ? 'There is risk' : 'There is no risk';

    //    return answer;

    // v1.2
    return smoking || alcohol || over65 ? 'There is risk' : 'There is no risk';
}

// v2.0
const check2 = (smoking, alcohol, over65) => smoking || alcohol || over65 ? 'There is risk' : 'There is no risk';

console.log(check(false, false, false));
console.log(check2(false, false, false));

/*









































oddOrEven = true;




console.log(oddOrEven);






































console.log(oddOrEven(5));






*/