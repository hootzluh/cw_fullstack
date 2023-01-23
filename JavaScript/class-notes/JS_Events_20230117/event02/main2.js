const bg = document.getElementById('bgChange');
const fg = document.getElementById('fgChange');

bg.addEventListener('click', changeIt);
fg.addEventListener('click', changeIt);

function randomColorGenerator(){
    let red = Math.round((Math.random()*255));
    let green = Math.round((Math.random()*255));
    let blue = Math.round((Math.random()*255));

    let result = `rgb(${red}, ${green}, ${blue})`;

    return result;
}

function changeIt(event){
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.innerText);
    // console.log(event.target.tagName);
    // event.target.innerText = 'I AM NEW TEXT...';
    // console.log(event.target.innerText.search('Back'));
    if(event.target.innerText.search('Back') > 0){
        //console.log('changing background');
        let body =  document.getElementsByTagName('body');
        //console.log(body);
        let theBody = body[0];
        theBody.style.backgroundColor = randomColorGenerator(); 
    }else{
        console.log('changing foreground');
    }
    //let test = new String('test');
    //test.
}



