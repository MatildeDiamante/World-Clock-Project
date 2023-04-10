function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Florence
  let florenceElement = document.querySelector("#florence");
  if (florenceElement) {
    let florenceDateElement = florenceElement.querySelector(".date");
    let florenceTimeElement = florenceElement.querySelector(".time");
    let florenceTime = moment().tz("Europe/Rome");
    florenceDateElement.innerHTML = florenceTime.format("MMMM Do YYYY");
    florenceTimeElement.innerHTML = florenceTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Auckland
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTime = moment().tz("Pacific/Auckland");
    aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function changeCity(event) {
  function updateChangeTime() {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities-list");
    citiesElement.innerHTML = `<div class="default-cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format(" A")}</small></div>
          </div>
        </div>`;
  }

  updateChangeTime();
  setInterval(updateChangeTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities");

citiesSelectElement.addEventListener("change", changeCity);
