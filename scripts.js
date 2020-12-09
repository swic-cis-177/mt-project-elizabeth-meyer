import data from "./data.js";
import { createBookTable, createGenreTable } from "./lib.js";

const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const p = document.querySelector("p");
const displayButton = document.getElementById("displayAll");
const tr = document.querySelector("tr");
const pTotal = document.getElementById("totalPageCount");
const genreButton = document.getElementById("genreButton");
const form = document.querySelector("form");
const searchButton = document.getElementById("searchButton");
const genreTable = document.getElementById("genre-table");
const table = document.querySelector("table");
const genreThead = document.getElementById("genre-thead");
const genreTbody = document.getElementById("genre-tbody");

thead.style.display = "none";
genreThead.style.display = "none";

/* enter book */
form.addEventListener("submit", (event) => {
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
  genreThead.style.display = "none";
  genreTbody.style.display = "none";
  thead.style.display = "table-header-group";
  createBookTable(data);
});

/* search title or author */
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById("search").value;
  const results = data.filter(
    (r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  tbody.textContent = "";
  genreTbody.textContent = "";
  genreThead.style.display = "none";
  thead.style.display = "table-header-group";
  p.textContent = "Search Results:";
  createBookTable(results);
  pTotal.textContent = "";
});

/* display books button - idea to use 3rd parameter from "Event Bubbling or Event Capturing?" section https://www.w3schools.com/js/js_htmldom_eventlistener.asp */
displayButton.addEventListener(
  "click",
  (event) => {
    p.textContent = "";
    tbody.textContent = "";
    thead.style.display = "table-header-group";
    genreTbody.textContent = "";
    genreThead.style.display = "none";
    createBookTable(data);
  },
  true
);

/* display by genre button */
genreButton.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    const searchGenre = document.getElementById("search").value;
    const resultsGenre = data.filter((r) =>
      r.genre.toLowerCase().includes(searchGenre.toLowerCase())
    );
    const newList = resultsGenre.map((f) => {
      return { title: f.title, author: f.author, pgCount: f.pgCount };
    });
    tbody.textContent = "";
    p.textContent = "";
    thead.style.display = "none";
    genreThead.style.display = "table-header-group";
    genreTbody.textContent = "";
    createGenreTable(newList);
    pTotal.textContent = "";
  },
  true
);
