"use strict";

const URL_USER = "https://ajax.test-danit.com/api/json/users;";
const URL_POST = "https://ajax.test-danit.com/api/json/posts;";

class Card {
  constructor() {}
}

class Requests {
  constructor(URL_USER, URL_POST) {
    this.URL_USER = URL_USER;
    this.URL_POST = URL_POST;
  }

  getUser() {
    return fetch(this.url).then((response) => {
      return response.json();
    });
  }
  getPost() {
    return fetch(this.url).then((response) => {
      return response.json();
    });
  }
}

// const request = new Requests(URL_USER);
// request.getUser().then((data) => {
//   console.log(data);
// });

// const root = document.querySelector("#root");
// const URL_USER = "https://ajax.test-danit.com/api/json/users;";
// const URL_POST = "https://ajax.test-danit.com/api/json/posts;";

// class Card {
//   constructor(url) {
//     this.url = url;
//   }
//   getPost() {
//     return fetch(this.url).then((response) => {
//       return response.json();
//     });
//   }

//   render(data) {
//     console.log(data);
//   }
// }

// const card = new Card(URL_USER);

// card.getPost().then((data) => {
//   console.log(data);
// });

//====================== TEST GPJ =========================
// const root = document.getElementById("root");

// class Card {
//   constructor(post, user) {
//     this.post = post;
//     this.user = user;
//     this.cardElement = this.createCard();
//     this.deleteButton = this.cardElement.querySelector(".delete-button");
//     this.deleteButton.addEventListener("click", () => {
//       this.deletePost();
//     });
//   }

//   createCard() {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const header = document.createElement("div");
//     header.classList.add("card-header");
//     header.innerText = this.post.title;

//     const body = document.createElement("div");
//     body.classList.add("card-body");
//     body.innerText = this.post.body;

//     const footer = document.createElement("div");
//     footer.classList.add("card-footer");
//     footer.innerHTML = `Posted by: ${this.user.name} ${this.user.surname} (${this.user.email})`;

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete-button");
//     deleteButton.innerHTML = "&#10006;";
//     footer.appendChild(deleteButton);

//     card.appendChild(header);
//     card.appendChild(body);
//     card.appendChild(footer);

//     return card;
//   }

//   deletePost() {
//     fetch(`https://ajax.test-danit.com/api/json/posts/${this.post.id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (response.ok) {
//           this.cardElement.remove();
//         } else {
//           throw new Error("Failed to delete post");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }
// const ULR_USER = "https://ajax.test-danit.com/api/json/users";
// const ULR_POST = "https://ajax.test-danit.com/api/json/posts";

// const usersRequest = new Requests(ULR_USER);
// const postsRequest = new Requests(ULR_POST);

// Promise.all([usersRequest.get(), postsRequest.get()])
//   .then(([users, posts]) => {
//     posts.forEach((post) => {
//       const user = users.find((user) => user.id === post.userId);
//       if (user) {
//         const card = new Card(post, user);
//         root.appendChild(card.cardElement);
//       }
//     });
//   })
//   .catch((error) => {
//     console.error(error);
// //   });
// import { getAuthors, getPosts } from "./services.js";
// import { Post } from "./Post.js";

// // getAuthors.then((res) => res.json()).then((data) => console.log(data));
// // getPosts.then((res) => res.json()).then((data) => console.log(data));
// Promise.all([getAuthors, getPosts]).then(([authors, posts]) => {
//   const postsArr = [];

//   authors.forEach((author) => {
//     posts.forEach((post) => {
//       if (author.id === post.userId) {
//         const card = new Post({
//           title: post.title,
//           body: post.body,
//           name: author.name,
//           email: author.email,
//           userID: author.id,
//           postId: post.id,
//         });
//         postsArr.push(card);
//       }
//     });
//   });
//   document.querySelector(".spiner").remove();
//   const ul = document.createElement("ul");
//   postsArr.forEach((post) => ul.append(post.render()));
//   document.querySelector("#root").append(ul);
// });
//!====================
// class Card {
//   constructor({ title, body, name, email, postId, userID }) {
//     this.title = title;
//     this.body = body;
//     this.name = name;
//     this.email = email;
//     this.postId = postId;
//     this.userID = userID;
//   }

//   render() {
//     // const deleteBtn = document.createElement("button");
//     const li = document.createElement("li");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";
//     //     deleteBtn.addEventListener("click", this.callback);

//     li.innerHTML = `
//     <p>name:${this.name}</p>
//     <p>email: ${this.email}</p>
//     <p>title:${this.title}</p>
//     <p>body: ${this.body}</p>
//     `;
//     li.append(deleteBtn);
//     return li;
//   }
// }

// Promise.all([getAuthors, getPosts]).then(([authors, posts]) => {
//   const postsArr = [];

//   authors.forEach((author) => {
//     posts.forEach((post) => {
//       if (author.id === post.userId) {
//         const card = new Post({
//           title: post.title,
//           body: post.body,
//           name: author.name,
//           email: author.email,
//           userID: author.id,
//           postId: post.id,
//         });
//         postsArr.push(card);
//       }
//     });
//   });
//   document.querySelector(".spiner").remove();
//   const ul = document.createElement("ul");
//   postsArr.forEach((post) => ul.append(post.render()));
//   document.querySelector("#root").append(ul);
// });

// const card = new Card();

// card.render();
// class Card {
//   constructor(post, user) {
//     this.post = post;
//     this.user = user;
//     this.cardElement = this.createCard();
//     this.deleteButton = this.cardElement.querySelector(".delete-button");
//     this.deleteButton.addEventListener("click", () => {
//       this.deletePost();
//     });
//   }

//   createCard() {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const header = document.createElement("div");
//     header.classList.add("card-header");
//     header.innerText = this.post.title;

//     const body = document.createElement("div");
//     body.classList.add("card-body");
//     body.innerText = this.post.body;

//     const footer = document.createElement("div");
//     footer.classList.add("card-footer");
//     footer.innerHTML = `Posted by: ${this.user.name} ${this.user.surname} (${this.user.email})`;

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete-button");
//     deleteButton.innerHTML = "&#10006;";
//     footer.appendChild(deleteButton);

//     card.appendChild(header);
//     card.appendChild(body);
//     card.appendChild(footer);

//     return card;
//   }

//   deletePost() {
//     fetch(`https://ajax.test-danit.com/api/json/posts/${this.post.id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (response.ok) {
//           this.cardElement.remove();
//         } else {
//           throw new Error("Failed to delete post");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }
//!===========================================================================================================
// const root = document.getElementById("root");

// class Card {
//   constructor(post, user) {
//     this.post = post;
//     this.user = user;
//     this.cardElement = this.createCard();
//     this.deleteButton = this.cardElement.querySelector(".delete-button");
//     this.deleteButton.addEventListener("click", () => {
//       this.deletePost();
//     });
//   }

//   createCard() {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const header = document.createElement("div");
//     header.classList.add("card-header");
//     header.innerText = this.post.title;

//     const body = document.createElement("div");
//     body.classList.add("card-body");
//     body.innerText = this.post.body;

//     const footer = document.createElement("div");
//     footer.classList.add("card-footer");
//     footer.innerHTML = `Posted by: ${this.user.name} ${this.user.surname} (${this.user.email})`;

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete-button");
//     deleteButton.innerHTML = "&#10006;";
//     footer.appendChild(deleteButton);

//     card.appendChild(header);
//     card.appendChild(body);
//     card.appendChild(footer);

//     return card;
//   }

//   deletePost() {
//     fetch(`https://ajax.test-danit.com/api/json/posts/${this.post.id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (response.ok) {
//           this.cardElement.remove();
//         } else {
//           throw new Error("Failed to delete post");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }

// const usersRequest = new Requests("https://ajax.test-danit.com/api/json/users");
// const postsRequest = new Requests("https://ajax.test-danit.com/api/json/posts");

// Promise.all([usersRequest.get(), postsRequest.get()])
//   .then(([users, posts]) => {
//     posts.forEach((post) => {
//       const user = users.find((user) => user.id === post.userId);
//       if (user) {
//         const card = new Card(post, user);
//         root.appendChild(card.cardElement);
//       }
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
