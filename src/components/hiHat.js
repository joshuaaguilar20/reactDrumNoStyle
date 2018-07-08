import React from 'react'
 
 
 export default class HiHat extends React.Component {
    constructor(props) {
      super(props);
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
      this.audio = new Audio(this.url);
      this.togglePlayHiHat = this.togglePlayHiHat.bind(this);
      this.onKeyPressed = this.onKeyPressed.bind(this);
    }
    componentDidMount() {
      document.addEventListener("keydown", this.onKeyPressed)
     }

    togglePlayHiHat() {
     this.audio.play() 
     this.props.setSound("Heater Two");
  }
    onKeyPressed(e) {
      if(e.key === 'W'){
          console.log('Heater-2');
          this.togglePlayHiHat();
      }
  }
   
  
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlayHiHat}>' W '</button>
        </div>
      );
    }
  }


 