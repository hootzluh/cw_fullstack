// const uNameDiv = document.getElementById('uNameDiv');
// const passDiv = document.getElementById('passDiv');
const uName = document.getElementById('uName');
const pass = document.getElementById('pass');
const form = document.getElementById('formExample');
const warning = document.getElementById('warning');
const zoom = document.getElementById('zoom');
const comments = document.getElementById('comments');
const charcount = document.getElementById('charCount')

const removeDefault = (event) => {
    let parent = event.target.parentElement;
    parent.classList.remove('default');
    parent.classList.add('whiteBorder');
}

uName.addEventListener('change', removeDefault);

pass.addEventListener('change', removeDefault);

form.addEventListener('submit', (event) => {

    //console.log(warning, pass, uName);

    if(pass.value.trim().length == 0 || 
       uName.value.trim().length == 0){
        warning.classList.add('warning');
        warning.innerText = 'User Name and Password are Required...';
    }else{
        warning.classList.remove('warning');
        warning.innerText = '';
        alert('Consider DONE...')
    }

    event.preventDefault();
});

zoom.addEventListener('mouseover', ()=>{
    comments.style.fontSize = '36px';
});

zoom.addEventListener('mouseout', ()=>{
    comments.style.fontSize = '24px';
});

comments.addEventListener('keyup', () => {
    let present = comments.value;

    if(present.length > 15){
        charcount.style.color = 'red';
    }else{
        charcount.style.color = 'black';
    }

    if(present.length > 20){
        comments.value = present.substring(0,20);
    }

    charcount.innerText = comments.value.length;
})



// console.log(document.getElementById('charCount').classList);
// console.log(document.getElementById('charCount').innerText);