import React from "react";

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    // alert("login button clicked");
    this.setState(prevState =>{
      
      return {
        isLoggedIn: !prevState.isLoggedIn,
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{
          this.state.isLoggedIn ? 'Log out' : 'Log in'
        }</button>
      </div>
    );
  }
}

export default Login;
