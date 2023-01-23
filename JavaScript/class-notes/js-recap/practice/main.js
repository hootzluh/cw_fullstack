const form = document.querySelector('form');

form.addEventListener('submit', addBook)

document.getElementById('book-list').addEventListener('click', bookAction)


function addBook(e){
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const isbn = document.querySelector('#isbn');
  const imagUrl = document.querySelector('#image-url');
  const bookList = document.getElementById('book-list')

//   validation     '' false null undefined 
if(!title.value || !author.value || !isbn.value || !imagUrl.value)  return ;

// create a div element 
const div = document.createElement('div')
div.classList.add('book')
div.classList.add('card');

div.innerHTML = `
  <div class="card-image">
    <img src="${imagUrl.value}" alt="">
  </div>
  <div class="card-body">
    <div class="book-info">
      <h3 class="text-center">${title.value}</h3>
      <div class="row">
        <p> Author: </p>
        <p> ${author.value}</p>
      </div>
      <div class="row">
        <p> ISBN: </p>
        <p> ${isbn.value}</p>
      </div>
    </div>
    <div class="card-actions">
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger">Delete</button>
    </div>
</div>
`
bookList.appendChild(div);

title.value = '';
author.value = '';
isbn.value = '';
imagUrl.value=''

}

function bookAction(e){
  const btn = e.target;
  if(btn.className.includes('btn-danger')){
    deleteBook(btn);
  }else{
    editBook(btn);
  }
}



function deleteBook(el){
  el.parentElement.parentElement.parentElement.remove();
}

function editBook(el){

  const title = document.querySelector('#title');
  // const author = document.querySelector('#author');
  // const isbn = document.querySelector('#isbn');
  // const imagUrl = document.querySelector('#image-url');
  // const bookList = document.getElementById('book-list')

  const bookTitle = el.parentElement.previousElementSibling.firstElementChild.textContent;

  title.value = bookTitle;

  deleteBook(el)
}