const btn = document.createElement("btn");
btn.textContent = "Знайти по IP";
const root = document.querySelector("#root");
root.append(btn);

IP_URL = "https://api.ipify.org/?format=json";
PHYSICAL_URL = "http://ip-api.com/json/";
btn.addEventListener("click", (event) => {
  event.preventDefault();
  return clientIp();
});

async function clientIp() {
  const data = await fetch(IP_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return physicalIP();
    })
    .catch((e) => {
      console.log(e);
    });
}

async function physicalIP() {
  const data = await fetch(PHYSICAL_URL)
    .then((response) => {
      return response.json();
    })
    .then(({ countryCode, country, region, city, regionName }) => {
      const p = document.createElement("p");
      p.textContent = `Сontinent - ${countryCode}, Country - ${country}, Region - ${region}, City - ${city}, 
         Area - ${regionName}`;
      btn.after(p);
    })
    .catch((e) => {
      console.log(e);
    });
}
