import data from "./data.js";

const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const table = document.querySelector("table");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const books = Array.from(event.target.elements)
    .filter(({ id }) => id)
    .reduce(
      (accumulator, { id, value }) => ({ ...accumulator, ...{ [id]: value } }),
      {}
    );
  console.log(books);
  data.push(books);
  console.log(data);
  createBookTable(data);

});

const createBookTable = (data) => {
  /* while (table.rows.length > 0){
      table.deleteRow(0);
  } */

  data.forEach(({ title, author, genre, pgCount }) => {
    const newBookRow = template.content.cloneNode(true);
    const newBookTDs = newBookRow.querySelectorAll("td");

    newBookTDs[0].textContent = title;
    newBookTDs[1].textContent = author;
    newBookTDs[2].textContent = genre;
    newBookTDs[3].textContent = pgCount;
    tbody.appendChild(newBookRow);
  })};
