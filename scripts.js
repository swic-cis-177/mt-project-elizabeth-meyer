import data from "./data.js";

const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const table = document.querySelector("table");
const tr = document.querySelector("tr");
const p = document.querySelector("p");

const createBookTable = (data) => {
  data.forEach(({ title, author, genre, pgCount }) => {
    const newBookRow = template.content.cloneNode(true);
    const newBookTDs = newBookRow.querySelectorAll("td");

    newBookTDs[0].textContent = title;
    newBookTDs[1].textContent = author;
    newBookTDs[2].textContent = genre;
    newBookTDs[3].textContent = pgCount;
    tbody.appendChild(newBookRow);
  });
};

createBookTable(data);

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const books = Array.from(event.target.elements)
    .filter(({ id }) => id)
    .reduce(
      (accumulator, { id, value }) => ({ ...accumulator, ...{ [id]: value } }),
      {}
    );
  data.push(books);
  tbody.textContent = "";
  createBookTable(data);
});

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById("search").value;
  const results = data.filter((s) => s.title.includes(searchTerm));
  tbody.textContent = "";
  p.textContent = "Search Results:";
  createBookTable(results);
});
