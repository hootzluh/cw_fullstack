// Step 1: Get hold on Apple li
// const apple = document.getElementsByClassName('item')[0]
// const apple = document.querySelector('.item');

// step 2: move to next sibiling Element 
// const pear = apple.nextElementSibling;
// pear.innerHTML = "Orange $<span>5<span>";

// step 3: move to next sibiling Element and remove it 
//const banana = pear.nextElementSibling;
// const banana = apple.nextElementSibling.nextElementSibling;
// banana.remove();

// nextElementSibiling: Get hold on the next sibiling element node
// innerHTML: Get or set the html code of an element 
// remove(): remove element/node from the DOM
// apple.parentElement.parentElement.style.background = 'lightblue';


// ----------------------------------------------------------------
// Loop through HTML Collections 
// ----------------------------------------------------------------


// const spans = document.querySelectorAll('span')
const spans = document.getElementsByTagName('span');
// const spanArr = Array.from(spans)

// let sum = 0;
// spans.forEach(span=>{
//     sum+=Number(span.textContent)
// })

// console.log(sum);

const sum = Array.from(spans).reduce((sum, span)=> sum+ Number(span.textContent), 0);
console.log(sum);
