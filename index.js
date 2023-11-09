//Analog clock..............................
function localTimeAnalog() {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}
localTimeAnalog();
setInterval(localTimeAnalog, 1000);

// Digital local clock ..............................
function localTimeDigital() {
  let localLocation=document.querySelector("#localcity");
  localLocation.innerHTML=`${moment.tz.guess().replace("_", " ").split("/")[1]}
  <div class="time-zone-location"><small>(Timezone location)</small></div>`;
  let localTime = document.querySelector("#localtime");
  localTime.innerHTML = moment().format("hh:mm A");
  let localdate = document.querySelector("#localdate");
  localdate.innerHTML = moment().format("dddd MMMM Do YYYY");
}
localTimeDigital();
setInterval(localTimeDigital, 1000);

// Other city time..................................

function otherCity(event) {
  if (event.target.value.length > 0) {
    let newcity = `<div class="other-city ${
      event.target.value.replace("_", "").split("/")[1]
    }" id="eachcity"><div class="oncitylayer">
    <span class="other-city-header"><span class="city-name">${
      event.target.value.replace("_", " ").split("/")[1]
    }</span><span class="city-time">${moment()
      .tz(event.target.value)
      .format("hh:mm A")}</span></span>
    <div class="city-date">${moment()
      .tz(event.target.value)
      .format("ddd MM[/]D")}</div></div></div> `;

    let othercity = document.querySelector("#othercity");

    othercity.innerHTML = newcity;
  }
}
// search section ..............................
let searchbox = document.querySelector("#searchbox");
searchbox.addEventListener("change", otherCity);
//delete button .............................
function del(event) {
  // location.reload();
  let othercity = document.querySelector("#othercity");
  othercity.innerHTML = `<div></div>`;
}

let deletes = document.querySelector("#deletes");
deletes.addEventListener("click", del);

//changetheme button...............
function changetTheme() {
  let theme = document.querySelector(".light");
  theme.classList.toggle("dark");
}
let changetheme = document.querySelector("#theme");
changetheme.addEventListener("click", changetTheme);
