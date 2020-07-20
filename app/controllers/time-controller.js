import timeService from "../services/time-service.js"
import store from "../store.js"

function _drawAMPM() {
  let time = store.State.date
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let ampm = hours >= 12 ? "P.M" : "A.M"
  hours = hours % 12
  hours = hours ? hours : 12
  // minutes = minutes > 0 && minutes < 10 ? '0' + minutes : minutes
  minutes = minutes < 10 ? '0' + minutes : minutes;

  let writtenTime = hours + ':' + minutes + ' ' + ampm;

  document.getElementById("clockstandard").innerHTML = writtenTime
  greet()
}

function _drawmilitary() {
  let time = store.State.date
  let hours = time.getHours()
  let minutes = time.getMinutes()
  hours = hours < 12 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let writtenTime = hours + ':' + minutes
  document.getElementById("clockmilitary").innerHTML = writtenTime

  greet()

}
function greet() {
  let time = store.State.date
  let hours = time.getHours()
  if (hours < 12 && hours > 0) {
    document.getElementById("greet").innerText = "Good Morning"
  } else if (hours >= 12 && hours < 18) {
    document.getElementById("greet").innerText = "Good Afternoon"
  } else if (hours >= 18 && hours < 24) {
    document.getElementById("greet").innerText = "Good Evening"

  }
}
export default class timeController {
  constructor() {
    store.subscribe("date", _drawAMPM)
    store.subscribe("date", _drawmilitary)
  }
  toggle(value) {
    if (value == 'standard') {
      document.getElementById("clockstandard").classList.remove("hidden")
      document.getElementById("clockmilitary").classList.add("hidden")
      document.getElementById("butsta").disabled = true
      document.getElementById("butmil").removeAttribute("disabled")

    } else if (value == "military") {
      document.getElementById("clockmilitary").classList.remove("hidden")
      document.getElementById("clockstandard").classList.add("hidden")
      document.getElementById("butmil").disabled = true
      document.getElementById("butsta").removeAttribute("disabled")


    }
  }



}