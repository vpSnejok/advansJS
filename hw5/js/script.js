// Promise.all([getusers, getPosts]).then(([users, posts]) => {
//   const postsArr = [];

//   users.forEach((user) => {
//     posts.forEach((post) => {
//       if (user.id === post.userId) {
//         const card = new Post({
//           title: post.title,
//           body: post.body,
//           name: user.name,
//           email: user.email,
//           userID: user.id,
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

// Promise.all([getusers, getPosts]).then(([users, posts]) => {
//   const postsArr = [];

//   users.forEach((user) => {
//     posts.forEach((post) => {
//       if (user.id === post.userId) {
//         const card = new Post({
//           title: post.title,
//           body: post.body,
//           name: user.name,
//           email: user.email,
//           userID: user.id,
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

import { URL } from "./const.js";
import { Request } from "./Request.js";
import { Post } from "./Post.js";

const users = new Request({
  url: URL,
  prefix: "users",
});
const posts = new Request({
  url: URL,
  prefix: "posts",
});
// users.get().then(console.log);
// posts.get().then(console.log);

Promise.all([users.get(), posts.get()]).then(([users, posts]) => {
  const postsArr = [];

  users.forEach((user) => {
    posts.forEach((post) => {
      if (user.id === post.userId) {
        postsArr.push(
          new Post({
            title: post.title,
            body: post.body,
            name: user.name,
            email: user.email,
            userID: user.id,
            postId: post.id,
          })
        );
      }
    });
  });
  document.querySelector(".spiner").remove();
  const ul = document.createElement("ul");
  postsArr.forEach((post) => ul.append(post.render()));
  document.querySelector("#root").append(ul);
});
window.addEventListener("click", ({ target }) => {
  if (target.textContent === "delete") {
    console.log(target.parentElement);
    const li = target.parentElement;
    const id = li.getAttribute("id");

    const deletePost = new Request({
      url: URL,
      prefix: "posts",
      id,
    });

    deletePost.delete().then((res) => li.remove());
  }
});
