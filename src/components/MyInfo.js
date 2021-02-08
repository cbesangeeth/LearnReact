import React from "react";

class MyInfo extends React.Component{
  render(){
  const name = "Sangeeth";
  const date = new Date();
  const hours = date.getHours();
  const time = date.getMinutes();
  const style = {
    fontSize: 50
  }

  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
    style.color = "#04756F"
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon";
    style.color = "#04000F"
  } else {
    timeOfDay = "night";
    style.color = "#04078F"
  }

  return (
    <div>
      <h1> Hello {name}! </h1>
      <h2> Date : {date.toLocaleDateString()}</h2>
      <h2 style={style}> Good {timeOfDay} !</h2>
      <h3> Its currently {hours + "." + time} o'clock</h3>
      <p>
        I'm a Software Engineer, husband, interest on clean and green energy
      </p>
      <h2>Places to visit for my vacation</h2>
      <ul>
        <li>Germany</li>
        <li>Japan</li>
        <li>Maladeivs</li>
      </ul>
    </div>
  );
  }
}
// let MyInfo = () => {
//   const name = "Sangeeth";
//   const date = new Date();
//   const hours = date.getHours();
//   const time = date.getMinutes();
//   const style = {
//     fontSize: 50
//   }

//   let timeOfDay;
//   if (hours < 12) {
//     timeOfDay = "morning";
//     style.color = "#04756F"
//   } else if (hours >= 12 && hours <= 17) {
//     timeOfDay = "afternoon";
//     style.color = "#04000F"
//   } else {
//     timeOfDay = "night";
//     style.color = "#04078F"
//   }

//   return (
//     <div>
//       <h1> Hello {name}! </h1>
//       <h2> Date : {date.toLocaleDateString()}</h2>
//       <h2 style={style}> Good {timeOfDay} !</h2>
//       <h3> Its currently {hours + "." + time} o'clock</h3>
//       <p>
//         I'm a Software Engineer, husband, interest on clean and green energy
//       </p>
//       <h2>Places to visit for my vacation</h2>
//       <ul>
//         <li>Germany</li>
//         <li>Japan</li>
//         <li>Maladeivs</li>
//       </ul>
//     </div>
//   );
// };

export default MyInfo;
