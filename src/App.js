import React from "react";
import MyInfo from "./components/MyInfo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

let App = () => {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
