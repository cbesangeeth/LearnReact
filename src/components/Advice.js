import React from 'react';

class Advice extends React.Component{

  constructor(){
    super();
    this.state = {
      advice:"",
      isLoading:false,
    }
  }
  componentDidMount(){
    this.setState({
      isLoading: true,
    })
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(response => {
      this.setState({
        advice: response.slip.advice,
        isLoading: false,
      })
    })
  }

  render(){
    return(
      <div>
      Advice:
      <p> {this.state.isLoading ?  'Loading..':  this.state.advice}
       </p>
      </div>
    );
  }
}

export default Advice;