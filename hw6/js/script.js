const ipButton = document.querySelector("button");
const ul = document.createElement("ul");
const urlIp = "https://api.ipify.org/?format=json";
const urlInfo = "http://ip-api.com/";
ipButton.addEventListener("click", getIPUser);
async function castomGet(url, query = "") {
  const response = await fetch(`${url}${query}`);
  const data = await response.json();
  return data;
}
async function getIPUser() {
  const dataIP = await castomGet(urlIp);
  const dataInfo = await castomGet(
    urlInfo,
    `json/${dataIP.ip}?fields=country,regionName,city,district,continent`
  );
  for (let self in dataInfo) {
    createList(self, dataInfo[self]);
  }
  document.body.append(ul);
}
async function createList(self, info) {
  const li = document.createElement("li");
  li.innerHTML = `${self}: ${info}`;
  ul.append(li);
}
