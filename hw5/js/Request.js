export class Request {
  constructor({ url, prefix, id, method = "GET" }) {
    this.url = url;
    this.prefix = prefix;
    this.id = id;
    this.method = method;
  }
  async get() {
    const response = await fetch(this.url + this.prefix);
    if (response.status !== 200) {
      throw new Error("Erorr get");
    }
    return await response.json();
  }
  put() {}

  async delete() {
    const response = await fetch(this.url + this.prefix + "/" + this.id, {
      method: "DELETE",
    });
    if (response.status !== 200) {
      throw new Error("Erorr del");
    }
    return response;
  }
}
