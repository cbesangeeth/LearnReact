import React from "react";

class AppTodo extends React.Component {
  constructor() {
    super();

    this.state = {
      newTodoName: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log(this.props);
    this.props.addTodo(this.state.newTodoName);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="inputTask"
          value={this.state.newTodoName}
          name="newTodoName"
          onChange={this.handleChange}
        />

        <button
          onClick={() => {
            this.props.addTodo(this.state.newTodoName);
            this.setState({
              newTodoName: ""
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AppTodo;
