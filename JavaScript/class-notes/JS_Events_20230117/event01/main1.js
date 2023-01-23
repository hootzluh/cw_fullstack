const button = document.getElementById('out');

//console.log(button);

function perform(){
    alert('(1)Welcome user from external JS file...');
}
function perform2(){
    alert('(2)Welcome user from external JS file...');
}
function perform3(){
    alert('(3)Welcome user from external JS file...');
}
function performListen(){
    alert('(1)Welcome user from external JS file from listener...');
}
function performListen2(){
    alert('(2)Welcome user from external JS file from listener...');
}
function performListen3(){
    alert('(3)Welcome user from external JS file from listener...');
}

// no camelCasing
// don't put () after the name of function

// button.onclick = perform;
// button.onclick = perform2;
// button.onclick = perform3;

button.addEventListener('click', performListen);
button.addEventListener('click', performListen2);
button.addEventListener('click', performListen3);

const inputText = document.getElementById('inputText');

function removeListen3(){
    console.log('Performing removal of Listen 3...');
    button.removeEventListener('click', performListen3);
}

inputText.addEventListener('keyup', removeListen3);

