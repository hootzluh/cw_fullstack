let array01 = [1, 45, 23, 'AAA', 'BBB', 'CCC'];

/*
for(let i = 0; i < array01.length; i++){
    console.log(`(F)This is index ${i} and it points to ${array01[i]}`);
}
*/

/*
let i = 0;

while( i < array01.length){
    console.log(`(W)This is index ${i} and it points to ${array01[i]}`);
    i++;
}
*/

for(let i in array01){
    console.log(i, ' ', array01[i]);
}

console.warn('-----------------');

for(let i of array01){
    console.log(i);
}
