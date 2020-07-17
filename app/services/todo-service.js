import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/christopherA/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi.get().then(res => {
      console.log(res.data.data);
      store.commit("todos", res.data.data.map(tododata => new Todo(tododata)))
    });
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi.post("", todo).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let foundTodo = store.State.todos.find(todo => todo.id == todoId);
    if (foundTodo.completed == true) {
      foundTodo.completed = false
    } else {
      foundTodo.completed = true
    }

    console.log(foundTodo);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    todoApi.put(todoId, foundTodo).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete(todoId).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
