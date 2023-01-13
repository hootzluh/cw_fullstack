const DOB = [1977 , 9 , 6];

const Y1 = DOB[0];
const M1 = DOB[1];
const D1 = DOB[2];

console.log(Y1, M1, D1);

let [Y2, M2, D2] = DOB;
console.log(Y2, M2, D2);


let [Y3, , D3] = DOB;
console.log(Y2, '-' , D2);


