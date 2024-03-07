const addBook = document.querySelector('.add-book');
const dialog = document.querySelector('dialog');

addBook.addEventListener('click', (e) => {
    dialog.showModal();
});



const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const book = new Book("coo", "alex", 176);
    myLibrary.push(book);
}

console.log(myLibrary[0]);