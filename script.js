const myLibrary = [{
    title: 'hello',
    author: 'carl',
    pages: 23,
    condition: 'yes',
}];

function Book(title, author, pages, condition) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.condition = condition;
}

Book.prototype.change = function(btn) {
    btn.addEventListener('click', (e) => {
    if(this.condition === 'Read') {
        this.condition = 'Not Read';
        btn.textContent = 'Not Read';
    } else if(this.condition === 'Not Read') {
        this.condition === 'Read';
        btn.textContent = 'Read';
    }
    });
}

const addNewBook = document.querySelector('.add-new-book');
const dialog = document.querySelector('dialog');
const close = document.querySelector('.close-btn');
const addBook = document.querySelector('.add-book');


const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const condition = document.querySelector('select');

const results = document.querySelector('.results');



addNewBook.addEventListener('click', (e) => {
    dialog.showModal();
});

close.addEventListener('click', (e) => {
    dialog.close();
});

addBook.addEventListener('click', (e) => {
    e.preventDefault();

    const book = new Book(title.value, author.value, pages.value, condition.value);
    myLibrary.push(book);
    display(myLibrary);

    const btn2 = document.querySelector('.change-btn');
    book.change(btn2);
    
    form.reset();
});

function display(array) {
    for(let i = 0; i < array.length; i++) {
        const div = document.createElement('div');
                
        div.innerHTML = `Title: ${array[i].title}<br>
                            Author: ${array[i].author}<br>
                            Pages: ${array[i].pages}<br>
                            Status: ${array[i].condition}<br>`
        
        const btn1 = document.createElement('button');
        btn1.classList.toggle('del-btn');
        btn1.textContent = 'Delete';
        div.appendChild(btn1);

        const btn2 = document.createElement('button');
        btn2.classList.toggle('change-btn');
        btn2.textContent = 'Read';
        div.appendChild(btn2);
    
        results.appendChild(div);      
    }

    remove();
}

function remove() {
    const del = document.querySelectorAll('.del-btn');

    for(let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', (e) => {
            del[i].parentNode.remove();
        });
    }
}

console.log(Object.getPrototypeOf(book))