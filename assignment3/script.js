function Book(id, title, author, year) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
}

let myLibrary = [];

function addToMyLibrary(title, author, year) {
  // validate input FIRST
  if (!title || !author || !year) {
    throw new Error("One of the attributes is empty");
  }

  // check duplicates
  const exists = myLibrary.some((item) => item.title === title);
  if (exists) {
    throw new Error(`Book with title ${title} already exists`);
  }

  const id = crypto.randomUUID();
  const bookToAdd = new Book(id, title, author, year);
  myLibrary.push(bookToAdd);
}

function removeBook(id) {
  myLibrary = myLibrary.filter((item) => item.id !== id);
}

function displayLibrary(booksArray) {
  const grid = document.querySelector(".library-grid");
  const emptyState = document.querySelector(".empty-state");

  grid.innerHTML = "";
  if (myLibrary.length === 0) {
    grid.style.display = "none";
    emptyState.style.display = "block";
    return;
  } else {
    grid.style.display = "grid";
    emptyState.style.display = "none";
  }
  booksArray.forEach((element) => {
    const bookNode = document.createElement("div");
    bookNode.className = "book-card";

    const bookTitleElement = document.createElement("h2");
    bookTitleElement.textContent = element.title;

    const bookAuthorElement = document.createElement("p");
    bookAuthorElement.textContent = element.author;

    const bookYearElement = document.createElement("p");
    bookYearElement.textContent = element.year;

    const cancelButton = document.createElement("button");
    cancelButton.className = "cancel-button";
    cancelButton.textContent = "X";
    cancelButton.dataset.id = element.id;

    bookNode.append(
      bookTitleElement,
      bookAuthorElement,
      bookYearElement,
      cancelButton,
    );
    grid.appendChild(bookNode);
  });
}

function handleAddBook(e) {
  e.preventDefault();

  const inputTitle = document.getElementById("input-book-title").value;
  const inputAuthor = document.getElementById("input-book-author").value;
  const inputYear = document.getElementById("input-book-year").value;

  try {
    addToMyLibrary(inputTitle, inputAuthor, inputYear);
  } catch (err) {
    alert(err);
  }

  resetInputs();
}

function resetInputs() {
  document.getElementById("input-book-title").value = "";
  document.getElementById("input-book-author").value = "";
  document.getElementById("input-book-year").value = "";
  displayLibrary(myLibrary);
}

function handleDeleteBook(e) {
  const id = e.target.dataset.id;

  removeBook(id);
  displayLibrary(myLibrary);
}

document
  .querySelector(".add-book-form")
  .addEventListener("submit", handleAddBook);

document.querySelector(".library-grid").addEventListener("click", function (e) {
  if (e.target.classList.contains("cancel-button")) {
    handleDeleteBook(e);
  }
});

displayLibrary(myLibrary);
