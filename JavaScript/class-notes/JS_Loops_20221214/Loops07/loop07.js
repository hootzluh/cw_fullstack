let num;

do{
    num = +prompt('Please enter a number between 1 to 10');
}while(!(num > 0 && num < 11));

for(let mult = 0; mult <= 10; mult++){
    console.log(`${num} x ${mult} = ${ num * mult }`);
}