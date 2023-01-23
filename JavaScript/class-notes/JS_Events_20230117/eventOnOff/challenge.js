const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    //console.log('Button clicked : ', event.target.innerText);
    console.log(e);
    if(e.target.innerText == 'ON'){
        e.target.innerText = 'OFF';
        e.target.style.backgroundColor = 'red';
    }else{
        e.target.innerText = 'ON';
        e.target.style.backgroundColor = 'blue';
    }
});

//console.log(document.getElementById('justP').innerText);
//console.log(document.getElementById('justP').innerHTML);

