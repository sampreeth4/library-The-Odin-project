let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render()
}



function render() {
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class=""title>${book.title}</h3>
                <h5 class="author">by: ${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
            </div>`;

        libraryEl.appendChild(bookEl);
    }
}
function addToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render()
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

const bookForm = document.getElementById('book-form');
const formButton = document.getElementById('btn');

formButton.addEventListener('click', function () {
    bookForm.classList.toggle('toggle');
})

document.querySelector('#book-form').addEventListener("submit", function (e) {
    e.preventDefault();
    addToLibrary();
})