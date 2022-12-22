const randNum  = Math.ceil(Math.random() * 100);

//console.log(randNum);

let found = false;
let guess = 0;
let lives = 5;


while (!found && lives > 0){
    guess = +prompt(`Enter a number.... You have ${lives} chance left...`);

    if(guess > randNum){
        alert('Enter something smaller...');
        lives--;
    }else if (guess < randNum){
        alert('Enter something bigger...');
        lives--;
    }else{
        found = true;
        alert('You found it...');
    }
}

if(!found){
    alert(`Sorry but you lost... The number was ${randNum}`);
}

