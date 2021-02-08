import React from "react";

import TodoItem from "./TodoItem";
import data from "../todoData";

class MainContent extends React.Component{
  
  constructor() {
    super();
    this.state = {
      todos: data
    };

    this.handleChange = this.handleChange.bind(this)
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
      {todos}
    </main>
  );
  }
}
export default MainContent;
