const modal = document.getElementById("addBookModal");
const btn = document.getElementById("addBookButton");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("addBookForm");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

form.onsubmit = function(event) {
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
    <h3>${book.title}</h3>
    <section class="bookInfo">
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.nPages}</p>
    </section>
  `;
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


