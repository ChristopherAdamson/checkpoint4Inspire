



export default class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data._id
    this.completed = data.completed || false
  }
  get Template() {
    return `
   <div class="col-12 ${this.completed == true ? `order-12` : ""} ">
   <button onclick="app.todoController.removeTodo('${this.id}')" class="text-danger float-right  btn"><i class="fa fa-trash-o"></i></button>
    <input ${this.completed == true ? `checked` : ""} onclick="app.todoController.toggleTodoStatus('${this.id}')" class="float-left mt-2 mx-1" type="checkbox" name="" id="">
    <p ${this.completed == true ? `style="text-decoration: line-through;"` : ""} class=" my-0">${this.description}</p>

  </div>
    `
  }
}