//new
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const books = Array.from(event.target.elements)
    .filter(({ id }) => id)
    .reduce(
      (accumulator, { id, value }) => ({ ...accumulator, ...{ [id]: value } }),
      {}
    );
  console.log(books);
});
