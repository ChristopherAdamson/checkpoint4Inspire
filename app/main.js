import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js";

//TODO Dont forget to register all your controllers
class App {
  imageController = new ImageController();
  weatherController = new WeatherController();
  todoController = new TodoController();
}

window["app"] = new App();



