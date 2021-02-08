import React from "react";
import styles from "../style.css";

// function NavBar2() {
//   return (
//     <header className={styles.headernav}>
    
//       <nav>
//         <ul>
//           <li className="list"> Home </li>
//           <li className="headernav"> Gallery</li>
//           <li className="list-red"> Contact Us </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

class NavBar extends React.Component{
  render(){
    return (
    <header className={styles.headernav}>
      <nav>
        <ul>
          <li className="list"> Home </li>
          <li className="headernav"> Gallery</li>
          <li className="list-red"> Contact Us </li>
        </ul>
      </nav>
    </header>
  );

  }
}

export default NavBar;
