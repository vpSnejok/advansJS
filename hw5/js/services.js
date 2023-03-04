const URL = "https://ajax.test-danit.com/api/json/";

export const getAuthors = fetch(URL + `users`).then((res) => res.json());

export const getPosts = fetch(URL + `posts`).then((res) => res.json());

// export const deletePost = fetch(URL + `posts`).then((res) => res.json());
