const form = document.querySelector("form");
const books = [];
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
});
