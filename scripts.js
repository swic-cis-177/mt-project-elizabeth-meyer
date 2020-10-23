const books = [];

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const genre = document.querySelector("#genre");
const pgCount = document.querySelector("#pgCount");

title.addEventListener("blur", () => {
  console.log("babies");
});

form.addEventListener("submit", function () {
  event.preventDefault();

  const formData = {};

  for (let i = 0; i < 4; i++) {
    formData[event.target.elements[i].id] = event.target.elements[i].value;
  }

  var book = {
    title: formData[event.target.elements[0].id],
    author: formData[event.target.elements[1].id],
    genre: formData[event.target.elements[2].id],
    pgCount: formData[event.target.elements[3].id],
  };

  books.push(book);
  console.log("Bookshelf:");
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
  }

  //Map and Filter Methods
  const bookTitles = books.map((book) => book.title);
  console.log(bookTitles);

  const aBooks = books.filter(function (book) {
    return book.startsWith("A");
  });
  console.log(aBooks);
});
