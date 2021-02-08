import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <label
          style={{
            textDecoration: this.props.item.isCompleted && "line-through"
          }}
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
