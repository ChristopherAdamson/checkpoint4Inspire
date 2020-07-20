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

  document.getElementById("clock").innerHTML = writtenTime
}

function _drawmilitary() {
  let time = store.State.date

}
export default class timeController {
  constructor() {
    store.subscribe("date", _drawAMPM)
  }

}