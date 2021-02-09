import React from "react";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import data from "../todoData";

class MainContent extends React.Component{
  
  constructor() {
    super();
    this.state = {
      todos: data
    };

    this.handleChange = this.handleChange.bind(this)
  }

  addTodo(taskName){
    const newTask = {
      id: this.state.todos.length +1,
      task: taskName,
      isCompleted: false
    }

    this.setState(prevState => {
      let newTodoList = prevState.todos;
      newTodoList.push(newTask);

      return{
        todos: newTodoList
      }
    })
  }

  handleChange(id){

    this.setState(prevState => {
      const updatedTodos = prevState.todos.map((todo) => {
        if(todo.id === id){
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }

  getTodos(){
     const todos = this.state.todos.map(each => 
     <div> 
        <TodoItem 
          key={each.id} 
          item = {each}
          
          handleChange={this.handleChange}
        /> 
     </div>);

    return todos;
  }
  
  render(){
    let todos = this.getTodos();
    return (
    <main>
      <AddTodo />
      {todos}
    </main>
  );
  }
}
export default MainContent;
