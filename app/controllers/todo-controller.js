import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = ""
  store.State.todos.forEach(todo => template += todo.Template)
  document.getElementById("todos").innerHTML = template
}
function _drawRemaining() {
  let remaining = 0
  store.State.todos.forEach(todo => {
    if (todo.completed == false) {
      remaining++
    }
  })

  document.getElementById("remaining").innerHTML = `<p class="tOutline">Todos remaining: ${remaining}</p>`

}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos)
    store.subscribe("todos", _drawRemaining)
  }

  addTodo(e) {
    e.preventDefault();
    let formdata = e.target;
    let todo = {
      description: formdata.todo.value
      //TODO build the todo object from the data that comes into this method
    };
    console.log(todo);
    TodoService.addTodoAsync(todo);
    formdata.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
