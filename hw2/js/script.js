"use strick";
const div = document.querySelector("#root");
const ul = document.createElement("ul");

const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];
books.forEach((book) => {
  try {
    if (!book.hasOwnProperty("author")) {
      throw Error("No author");
    }
    if (!book.hasOwnProperty("name")) {
      throw Error("No name");
    }
    if (!book.hasOwnProperty("price")) {
      throw Error("No price");
    }
    const li = document.createElement("li");
    li.innerHTML = `
    <p><b>author: </b>${book.author}</p>
    <p><b>name: </b>${book.name}</p>
    <p><b>price: </b>${book.price}</p>
        `;
    ul.append(li);
  } catch (error) {
    console.log(error);
  }
});

div.append(ul);
