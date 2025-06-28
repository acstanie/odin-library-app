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

const myLibrary = [{
    id: crypto.randomUUID(),
    title: 'hello',
    author: 'carl',
    pages: 23,
    condition: 'Read',
}];

function Book(id, title, author, pages, condition) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.condition = condition;
}

Book.prototype.change = function(btn) {
    btn.addEventListener('click', (e) => {
        if(this.condition === 'Read') {
            this.condition = 'Not-Read';
            btn.textContent = 'Not-Read';
        } 
        if(this.condition === 'Not-Read') {
            this.condition === 'Read';
            btn.textContent = 'Read';
        }
    });
}

function display(array) {
    for(let i = 0; i < array.length; i++) {
        const div = document.createElement('div');
        div.classList.toggle("books");
                
        div.innerHTML = `  
                        <span class="book-id">${array[i].id}</span><br> 
                        Title: ${array[i].title}<br>
                        Author: ${array[i].author}<br>
                        Pages: ${array[i].pages}<br>
                        <span id='stat'>Status: ${array[i].condition}</span><br>`
        
        const btn1 = document.createElement('button');
        btn1.classList.toggle('del-btn');
        btn1.textContent = 'Delete';
        div.appendChild(btn1);

        const btn2 = document.createElement('button');
        btn2.classList.toggle('change-btn');
        if (array[i].condition === "Not-Read") {
            btn2.textContent = "Read"; 
        }
        if (array[i].condition === "Read") {
            btn2.textContent = "Not-Read"; 
        }
        div.appendChild(btn2);

        results.appendChild(div);    
    }
}

function remove(array) {
    results.addEventListener("click", (e) => {
        if (e.target.matches(".del-btn")) {
            const id = e.target.parentNode.querySelector(".book-id").textContent;
            
            array.forEach(book => {
                if (book.id === id) {
                    let position = array.indexOf(book);
                    array.splice(position, 1);
                }
            });

            e.target.parentNode.remove();
        }
    });
}

results.addEventListener("click", (e) => {
    if(e.target.matches(".change-btn")) {
        const stat = e.target.parentNode.querySelector("#stat");
        if (stat.textContent === "Status: Not-Read") {
            console.log(true);
            stat.innerHTML = "Status: Read";
            e.target.textContent = "Not-Read";
            return;
        }
        if (stat.textContent === "Status: Read") {
            stat.innerHTML = "Status: Not-Read";
            e.target.textContent = "Read";
            return;
        }
    }
});

addNewBook.addEventListener('click', (e) => {
    dialog.showModal();
});

close.addEventListener('click', (e) => {
    dialog.close();
});

addBook.addEventListener('click', (e) => {
    e.preventDefault();

    let id = crypto.randomUUID()
    const book = new Book(id, title.value, author.value, pages.value, condition.value);
    myLibrary.push(book);
    results.innerHTML = "";
    display(myLibrary);
    remove(myLibrary);

    const btn2 = document.querySelector('.change-btn');
    book.change(btn2);
    
    form.reset();
    dialog.close();
});
