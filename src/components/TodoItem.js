import React, { Component } from "react";

class TodoItem extends Component {
  render() {

    const completedStyle = {
      fontStyle: 'italic',
      textDecoration: 'line-through',
      color: '#cdcdcd',
    }

    return (
      <div className="todo-item">
        <label
          style={
            this.props.item.isCompleted ? completedStyle : null
          }
        >
          <input
            type="checkbox"
            checked={this.props.item.isCompleted}
            onChange={event => {
              this.props.handleChange(this.props.item.id);
            }}
          />
          {this.props.item.task}
        </label>
        <br />
      </div>
    );
  }
}

export default TodoItem;
