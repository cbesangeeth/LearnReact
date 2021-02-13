import React from "react";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Advice from "./components/Advice";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Login/>
        <Advice />
        <Todo />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default App;
