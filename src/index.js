function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  //Florence
  let florenceElement = document.querySelector("#florence");
  let florenceDateElement = florenceElement.querySelector(".date");
  let florenceTimeElement = florenceElement.querySelector(".time");
  let florenceTime = moment().tz("Europe/Rome");
  florenceDateElement.innerHTML = florenceTime.format("MMMM Do YYYY");
  florenceTimeElement.innerHTML = florenceTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");
  aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
