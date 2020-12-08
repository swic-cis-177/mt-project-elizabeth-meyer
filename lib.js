const template = document.querySelector("template");
const tbody = document.querySelector("tbody");
const tr = document.querySelector("tr");
const pAvg = document.getElementById("averagePageCount");

const calculateAverage = (data) =>
  data.reduce((total, { pgCount }) => {
    total += Number(pgCount);
    return total;
  }, 0) / data.length;

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
  pAvg.textContent = "Average Page Count: " + calculateAverage(data).toFixed(0);
};
