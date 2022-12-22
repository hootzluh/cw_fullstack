/*
Do I know number of iteration? yes -> for | no -> while
Do I need to run the loop at least once? yes -> do..while | no -> for, while
Do I have multiple dependencies ? yes -> while | no -> any
*/


let num = 0;

while (num <= 3) {
    console.log(num);
    num++;
}

console.log("-------------");

for (let num2 = 0; num2 <= 3; num2++) {
    console.log(num2);
}

console.log("-------------");

let num2 = 0;

for (; num2 <= 3; ) {
    console.log(num2);
    num2++
}