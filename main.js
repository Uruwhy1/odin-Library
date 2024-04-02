const myLibrary = [];

/* Example Books */
let philosophyBook = new Book("Meditations", "Marcus Aurelius", false);
let romanBook = new Book("The Storm Before the Storm", "Mike Duncan", true);


addBookToLibrary(philosophyBook);
addBookToLibrary(romanBook);
/* ------------- */

// MODAL STUFF
const closeButton = document.querySelector('.closeButton');
const addButton = document.querySelector('.add');
const modal = document.querySelector('.modal');
const inputBook = document.querySelector('.submit');
const form = document.querySelector('.book-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission 
  form.reset();
})

addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
inputBook.addEventListener('click', () => {

  if(!form.checkValidity()) {
    console.log("Empty!")
  } else {
    let book = new Book;
    book.title = document.querySelector('#title').value;
    book.author = document.querySelector('#author').value;
    book.read = document.querySelector('#read').checked;

    addBookToLibrary(book);
    console.log(book);
    console.log(myLibrary);

    modal.style.display = 'none';
  }
})

// REMOVE BOOK FROM LIST FUNCTIONS
function removeButtons() {
  const removeButtons = document.querySelectorAll('.remove-button');

  removeButtons.forEach((button, index) => {
  /// Remove eventListeners so they don't bloat idk if this is an issue or not but w/e
  button.removeEventListener('click', () => {
    myLibrary.splice(index, 1);
    loopBooks(myLibrary);
  });

    button.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      loopBooks(myLibrary);
    })
  });
}

// CHANGE READ STATUS FUNCTION
function changeRead() {
  const readButtons = document.querySelectorAll('.read-button');
  readButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      myLibrary[index].read = !myLibrary[index].read;
      loopBooks(myLibrary);
    })
  })
}

// CONSTRUCTOR FUNCTION
function Book(title, author, bool) {
  this.title = title;
  this.author = author;
  this.read = bool;
}


// ADD AND UPDATE LIBRARY FUNCTIONS
function addBookToLibrary(book) {
  myLibrary.push(book);
  loopBooks(myLibrary);
}

function loopBooks(arr) {
  let bookContainer = document.querySelector('.book-container');
  bookContainer.innerHTML = "";


  arr.forEach(function(book) {
    const bookInstance = document.createElement('div');
    bookInstance.classList.add('book');

    // TITLE AND AUTHOR
    const titleAuthor = document.createElement('div');
    const title = document.createElement('span');
    const author = document.createElement('span');

    title.textContent = book.title;
    author.textContent = ` by ${book.author}`;

    title.style.fontWeight = '500';
    author.style.color = 'gray';

    titleAuthor.appendChild(title);
    titleAuthor.appendChild(author);

    // BUTTONS
    const buttons = document.createElement('div');

    //// READ BUTTON
    const readBoolean = document.createElement('button');
    readBoolean.classList.add('read-button');
    readBoolean.style.backgroundColor = book.read ? 'green' : 'yellow';

    //// REMOVE BUTTON
    const remove = document.createElement('button');
    remove.classList.add('remove-button');

    const svgIcon = document.createElement('img');
    svgIcon.setAttribute('src', './images/x.svg');
    svgIcon.setAttribute('alt', 'Remove');
    remove.appendChild(svgIcon);


    buttons.appendChild(readBoolean);
    buttons.appendChild(remove);


    // APPEND TO DISPLAY
    bookInstance.appendChild(titleAuthor);
    bookInstance.appendChild(buttons);

    bookContainer.appendChild(bookInstance);
  });
  removeButtons()
  changeRead()
}
