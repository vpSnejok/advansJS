"use strick";

//task 1

const clients1 = [
  "Гилберт",
  "Сальваторе",
  "Пирс",
  "Соммерс",
  "Форбс",
  "Донован",
  "Беннет",
];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

const [...allClients] = new Set([...clients1, ...clients2]);

//task 2

const characters = [
  {
    name: "Елена",
    lastName: "Гилберт",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Кэролайн",
    lastName: "Форбс",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Аларик",
    lastName: "Зальцман",
    age: 31,
    gender: "man",
    status: "human",
  },
  {
    name: "Дэймон",
    lastName: "Сальваторе",
    age: 156,
    gender: "man",
    status: "vampire",
  },
  {
    name: "Ребекка",
    lastName: "Майклсон",
    age: 1089,
    gender: "woman",
    status: "vempire",
  },
  {
    name: "Клаус",
    lastName: "Майклсон",
    age: 1093,
    gender: "man",
    status: "vampire",
  },
];

// const newCharacters = [];
// characters.map((el) => {
//   newCharacters.push({ name: el.name, lastname: el.lastName, age: el.age });
// });
const charactersShortInfo = characters.map(({ name, lastName, age }) => ({
  name,
  lastName,
  age,
}));
console.log(charactersShortInfo);

//task 3

const user1 = {
  name: "John",
  years: 30,
};

const { name, years: age, isAdmin = false } = user1;
console.log(name, age, isAdmin);

//task 4

const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};

const fullProfile = Object.assign(satoshi2018, satoshi2019, satoshi2020);

//task 5
const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};

const booksResult = [...books, bookToAdd];

//task 6

const employee = {
  name: "Vitalii",
  surname: "Klichko",
};
const obj = { ...employee, age: "", salary: "" };

//task 7
const array = ["value", () => "showValue"];

const [value, showValue] = array;

// alert(value); // должно быть выведено 'value'
// alert(showValue()); // должно быть выведено 'showValue'
