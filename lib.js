const template = document.querySelector("template");
const genreTemplate = document.getElementById("genre-row");
const tbody = document.querySelector("tbody");
const tr = document.querySelector("tr");
const pTotal = document.getElementById("totalPageCount");
const genreTbody = document.getElementById("genre-tbody");

const pagesRead = (data) =>
  data.reduce((total, { pgCount }) => {
    total += Number(pgCount);
    return total;
  }, 0);

export const createBookTable = (data) => {
  data.forEach(({ title, author, genre, pgCount }) => {
    const newBookRow = template.content.cloneNode(true);
    const newBookTDs = newBookRow.querySelectorAll("td");

    tr.style.display = "table-row";

    newBookTDs[0].textContent = title;
    newBookTDs[1].textContent = author;
    newBookTDs[2].textContent = genre;
    newBookTDs[3].textContent = pgCount;
    tbody.appendChild(newBookRow);
  });
  pTotal.textContent = pagesRead(data) + " pages read...";
};

export const createGenreTable = (data) => {
  data.forEach(({ title, author, pgCount }) => {
    const newGenreRow = genreTemplate.content.cloneNode(true);
    const newGenreTDs = newGenreRow.querySelectorAll("td");

    tr.style.display = "table-row";

    console.log(newGenreTDs[0].textContent);
    newGenreTDs[0].textContent = title;
    console.log(newGenreTDs[0].textContent);
    newGenreTDs[1].textContent = author;
    newGenreTDs[2].textContent = pgCount;
    genreTbody.appendChild(newGenreRow);
  });
  pTotal.textContent = pagesRead(data) + " pages read...";
};
