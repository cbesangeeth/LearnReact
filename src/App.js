import React from "react";
import MyInfo from "./components/MyInfo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Login from "./components/Login";

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
        {
          this.state.isLoading ? <h1> Loading..</h1> : <MainContent />}
        <Footer />
      </div>
    );
  }
}

export default App;
