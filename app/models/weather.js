export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.minTemp = data.main.temp_min
    this.maxTemp = data.main.temp_max
    this.wind = data.wind.speed
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.Ftemp = (((this.kelvin - 273.15) * 1.8) + 32).toFixed(1)
    this.Ctemp = (this.kelvin - 273.15).toFixed(1)
    this.toggle = false
  }
  get Template() {
    return `
    <div class="col-3 border border-secondary rounded dropshadow-lg">
    <h5>${this.city}</h5>
    <img onclick="app.weatherController.toggleTemp()" src="http://openweathermap.org/img/w/` + `${this.icon}` + `.png">
    <h5 id="temp"> ${this.toggle == false ? `Temp: ${this.Ftemp}F°` : `Temp: ${this.Ctemp}C°`}</h5>
    <p> Min-Temp: ${this.minTemp} Max-temp: ${this.maxTemp}</p>
    <p>${this.wind}</p>
    <p>${this.description}</p>
  </div>
    `
  }
}