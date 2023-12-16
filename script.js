const modal = document.getElementById("addBookModal");
const addBookButton = document.getElementById("addBookButton");
const closeButton = document.getElementsByClassName("close")[0];
const addBookForm = document.getElementById("addBookForm");

addBookButton.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

addBookForm.onsubmit = function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  const newBook = new Book(title, author, pages);
  addBookToLibrary(newBook);
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function Book(title, author, nPages) {
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.info = function() {
    console.log(`${title} by ${author}. ${nPages} pages`)
  }
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295)

const myLibrary = [theHobbit];

function makeBookCard(book) {
  const bookContainer = document.createElement("div");
  bookContainer.classList.add('book')
  bookContainer.innerHTML = `
    <section class="bookTitle">
      <h3>${book.title}</h3>
      <span id="removeBook" class="material-symbols-rounded">close</i></span>
    </section>
    <section class="bookInfo">
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.nPages}</p>
    </section>
  `;

  const removeBookButton = bookContainer.querySelector('#removeBook');
  removeBookButton.addEventListener('click', function() {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    displayLibrary();
  })

  return bookContainer;
}

function displayLibrary() {
  const libraryDisplay = document.querySelector('.booksContainer');
  libraryDisplay.innerHTML = '';
  myLibrary.forEach(book => {
    libraryDisplay.appendChild(makeBookCard(book));
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayLibrary();
}

displayLibrary()



