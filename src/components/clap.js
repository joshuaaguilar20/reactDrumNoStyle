 import React from 'react'
 
 
 export default class Heater1 extends React.Component {
    constructor(props) {
      super(props);
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
      this.audio = new Audio(this.url);
      this.togglePlayHeater1 = this.togglePlayHeater1.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this)
      this.onKeyPressed = this.onKeyPressed.bind(this)
    }
  
    componentDidMount() {
      document.addEventListener("keydown", this.onKeyPressed)
     }

      togglePlayHeater1() {
     this.audio.play(); 
     this.props.setSound("Clap");
  }
      onKeyPressed(e) {
      if(e.key === 'Q'){
          console.log('Heater 1');
          this.togglePlayHeater1();
      }
  }
  
    render() {
      return (
        <div>
        <div className="drum-pad" id="Q"
        onClick={this.togglePlayHeater1}>Q
        <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
        </div>
        </div>
       
      );
    }
  }


 