import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {
  toggleTemp() {
    if (store.State.weather.toggle == false) {
      store.State.weather.toggle = true
    } else {
      store.State.weather.toggle = false
    }
  }
  getWeather() {
    weatherApi.get().then(res => {
      console.log(res.data);
      store.commit("weather", new Weather(res.data));

    }).catch(err => console.error(err))
  }
}

const weatherService = new WeatherService();
export default weatherService;
