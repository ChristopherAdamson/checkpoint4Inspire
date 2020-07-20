import store from "../store.js";


let _timeApi = axios.create({
  baseURL: "//worldtimeapi.org/api/timezone/America/Boise",
  timeOut: 5000
})
class timeService {
  constructor() {
    this.getTime()
    this.testTime()
    this.interval()
  }
  getTime() {
    _timeApi.get().then(res => {
      console.log(res.data);
      let date = new Date(res.data.datetime)
      store.commit("date", date)
    }).catch(err => console.error(err))
  }
  testTime() {

  }
  interval() {
    let minute = 60000
    setInterval(this.getTime, minute)
  }
}


const Service = new timeService
export default Service