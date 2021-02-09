import React from "react";

class AppTodo extends React.Component{


handleClick(e){
  console.log("clicked",e);
}

  render(){
    return(
      <div>
        <input 
          type="text"
          id="inputTask"
          
        />
        <button onClick={this.handleClick(document.getElementById('inputTask'))}>
          Add
        </button>
        
      </div>
    )
  }
}

export default AppTodo;