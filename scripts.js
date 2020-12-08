import data from "./data.js";
import { createBookTable } from "./lib.js";

const tbody = document.querySelector("tbody");
const p = document.querySelector("p");
const displayButton = document.getElementById("displayAll");
const tr = document.querySelector("tr");
const pTotal = document.getElementById("totalPageCount");

tr.style.display = "none";

/* enter book */
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const books = Array.from(event.target.elements)
    .filter(({ id }) => id)
    .reduce(
      (accumulator, { id, value }) => ({ ...accumulator, ...{ [id]: value } }),
      {}
    );
  data.push(books);
  p.textContent = "";
  tbody.textContent = "";
  createBookTable(data);
});

/* search form */
document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById("search").value;
  const results = data.filter(
    (r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  tbody.textContent = "";
  p.textContent = "Search Results:";
  createBookTable(results);
  pTotal.textContent = "";
});

/* display all button - idea to use 3rd parameter from https://www.w3schools.com/js/js_htmldom_eventlistener.asp */
displayButton.addEventListener(
  "click",
  (event) => {
    p.textContent = "";
    tbody.textContent = "";
    createBookTable(data);
  },
  true
);

/* list by genre */
