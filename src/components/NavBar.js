import React from "react";
import styles from "../style.css";

class NavBar extends React.Component{
  render(){
    return (
    <header className={styles.headernav}>
      <nav>
        <ul>
          <li className="list"> Home </li>
          <li className="headernav"> Todo App</li>
          <li className="list-red"> About Me </li>
        </ul>
      </nav>
    </header>
  );

  }
}

export default NavBar;
