export class Post {
  constructor({ title, body, name, email, postId, userID }) {
    this.title = title;
    this.body = body;
    this.name = name;
    this.email = email;
    this.postId = postId;
    this.userID = userID;
  }

  render() {
    const li = document.createElement("li");
    li.setAttribute("id", this.postId);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    //     deleteBtn.addEventListener("click", this.callback);

    li.innerHTML = `
    <p>name:${this.name}</p>
    <p>email: ${this.email}</p>
    <p>title:${this.title}</p>
    <p>body: ${this.body}</p>
    `;
    li.append(deleteBtn);
    return li;
  }
}
