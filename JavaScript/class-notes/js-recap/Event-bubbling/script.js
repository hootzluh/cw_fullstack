const btn = document.querySelector('button');
const innerDiv = document.querySelector('.inner');
const outerDiv = document.querySelector('.outer');
const body= document.querySelector('body');
const html= document.querySelector('html');
const footer = document.querySelector('footer');


// btn.addEventListener('click', ()=>{
//     console.log('Button Clicked');
// })

// innerDiv.addEventListener('click', ()=>{
//     console.log('Inner Div Clicked');
// })

// outerDiv.addEventListener('click', ()=>{
//     console.log('Outer Div Clicked');
// })

// body.addEventListener('click', ()=>{
//     console.log('Body Clicked');
// })

// html.addEventListener('click', ()=>{
//     console.log('HTML Clicked');
// })

// footer.addEventListener('click', ()=>{
//     console.log('Footer clicked')
// })


document.body.addEventListener('click', (e)=>{
   
    if(e.target.nodeName==='BUTTON'){
        console.log('Button clicked')
    }else if (e.target.className.includes('inner')){
        console.log('Inner Div clicked')
    }else if(e.target.className.includes('outer')){
        console.log('Outer Div clicked')
    }
})