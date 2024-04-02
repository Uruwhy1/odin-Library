const myLibrary = [];
addEventListener('DOMContentLoaded', function() {loopBooks(myLibrary)})

/* Example Books */
let philosophyBook = new Book("Meditations", "Marcus Aurelius", false);
let romanBook = new Book("The Storm Before the Storm", "Mike Duncan", true);


addBookToLibrary(philosophyBook);
addBookToLibrary(romanBook);
/* ------------- */

// ADD BOOKS BUTTON
const addButton = document.querySelector('.button');
addButton.addEventListener('click', () => {
  

})




function Book(title, author, bool) {
  this.title = title;
  this.author = author;
  this.read = bool;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function loopBooks(arr) {
  let bookContainer = document.querySelector('.book-container');

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
}

