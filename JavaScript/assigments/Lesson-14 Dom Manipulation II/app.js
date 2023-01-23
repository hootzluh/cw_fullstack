console.log('DOM manipulations');

// ! 1. Write a div that has a functioning counter inside btn increment and decrement 1 or 5 values buttons

const counter = document.getElementById('counter');
const buttons = document.getElementById('buttons');

let count = 0;

buttons.addEventListener('click', event => {
  count = count + event.target.innerText;
  counter.innerText = eval(count);
});

// ********************

// ! 2. Write code that displays the event.keyCode and event.code every time a key is pressed

const insert = document.getElementById('insert');

window.addEventListener('keydown', event => {
  console.log(event.key);
  console.log(event.keyCode);
  console.log(event.code);
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key}
  <small>event.key</small>
  </div>
  <div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${event.code}
  <small>event.code</small>
  </div>
  `;
});

// ********************

// ! 3. Write a div that has a like button. When you click for the first time it will like , if you click again it will take the like back

const likeBtn = document.getElementById('like');

likeBtn.addEventListener('click', () => {
  //   likeBtn.classList.toggle('liked');
  if (likeBtn.classList.contains('liked')) {
    likeBtn.classList.remove('liked');
  } else {
    likeBtn.classList.add('liked');
  }
});

// ********************

// ! 4. Write a div that appears when you scroll down to it's starting point.

const box = document.querySelector('.box');

function checkBox() {
  const pageBottom = (window.innerHeight / 5) * 4;
  const boxTop = box.getBoundingClientRect().top;
  console.log(pageBottom);
  console.log(boxTop);
  if (boxTop < pageBottom) {
    box.classList.add('show');
  } else {
    box.classList.remove('show');
  }
}

window.addEventListener('scroll', checkBox);
checkBox();

// ********************
