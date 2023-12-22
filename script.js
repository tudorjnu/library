var library = (function() {

  class Book {
    constructor(title, author, nPages) {
      this.title = title;
      this.author = author;
      this.nPages = nPages;
    }
  }

  var books = [new Book("The Hobbit", "J.R.R. Tolkien", 295),];

  const domElements = () => {
    modal = null;
    addBookButton = null;
    addBookForm = null;
    closeButton = null;
    booksContainer = null;
    bookTemplate = null;
  }

  const cacheDom = () => {
    domElements.modal = document.getElementById("addBookModal");
    domElements.addBookButton = document.getElementById("addBookButton");
    domElements.addBookForm = document.getElementById("addBookForm");
    domElements.closeButton = document.getElementById("closeButton");
    domElements.booksContainer = document.querySelector('.booksContainer');
    domElements.bookTemplate = document.getElementById('bookTemplate');
  }

  const bindEvents = () => {
    domElements.addBookButton.onclick = function() {
      domElements.modal.style.display = "block";
    }

    domElements.closeButton.onclick = function() {
      domElements.modal.style.display = "none";
    }

    domElements.addBookForm.onsubmit = function(event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;

      const newBook = new Book(title, author, pages);
      addBookToLibrary(newBook);
      domElements.modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == domElements.modal) {
        domElements.modal.style.display = "none";
      }
    }

  }

  const render = () => {
    domElements.booksContainer.innerHTML = '';
    books.forEach(book => {
      domElements.booksContainer.appendChild(makeBookCard(book));
    });
  }

  function addBookToLibrary(book) {
    books.push(book);
    render();
  }

  const makeBookCard = (book) => {
    var bookElement = domElements.bookTemplate.content.cloneNode(true);

    var bookTitle = bookElement.querySelector('.bookTitle h3');
    var bookAuthor = bookElement.querySelector('.bookInfo .author');
    var bookNPages = bookElement.querySelector('.bookInfo .nPages');
    var removeBookButton = bookElement.querySelector('.removeBookButton');

    bookTitle.textContent = book.title;
    bookAuthor.innerText = book.author;
    bookNPages.innerText = book.nPages;

    removeBookButton.addEventListener('click', function() {
      books.splice(books.indexOf(book), 1);
      render();
    })

    return bookElement;
  }

  const init = () => {
    cacheDom();
    bindEvents();
    render();
  }

  return {
    init,
  }

})();

document.addEventListener('DOMContentLoaded', library.init);

// const modal = document.getElementById("addBookModal");
// const addBookButton = document.getElementById("addBookButton");
// const closeButton = document.getElementById("closeButton");
// const addBookForm = document.getElementById("addBookForm");
//
// addBookButton.onclick = function() {
//   modal.style.display = "block";
// }
//
// closeButton.onclick = function() {
//   modal.style.display = "none";
// }
//
// addBookForm.onsubmit = function(event) {
//   event.preventDefault();
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('author').value;
//   const pages = document.getElementById('pages').value;
//
//   const newBook = new Book(title, author, pages);
//   addBookToLibrary(newBook);
//   modal.style.display = "none";
// }
//
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
//
// function Book(title, author, nPages) {
//   this.title = title;
//   this.author = author;
//   this.nPages = nPages;
//   this.info = function() {
//     console.log(`${title} by ${author}. ${nPages} pages`)
//   }
// }
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295)
//
// const books = [theHobbit];
//
// function makeBookCard(book) {
//   const bookContainer = document.createElement("div");
//   bookContainer.classList.add('book')
//   bookContainer.innerHTML = `
//     <section class="bookTitle">
//       <h3>${book.title}</h3>
//       <span id="removeBook" class="material-symbols-rounded">close</i></span>
//     </section>
//     <section class="bookInfo">
//       <p>Author: ${book.author}</p>
//       <p>Pages: ${book.nPages}</p>
//     </section>
//   `;
//
//   const removeBookButton = bookContainer.querySelector('#removeBook');
//   removeBookButton.addEventListener('click', function() {
//     books.splice(books.indexOf(book), 1);
//     render();
//   })
//
//   return bookContainer;
// }
//
// function render() {
//   const libraryDisplay = document.querySelector('.booksContainer');
//   libraryDisplay.innerHTML = '';
//   books.forEach(book => {
//     libraryDisplay.appendChild(makeBookCard(book));
//   });
// }
//
// function addBookToLibrary(book) {
//   books.push(book);
//   render();
// }
//
// render()
//
//

