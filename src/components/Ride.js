
import React from 'react'

export default class Ride extends React.Component {
    constructor(props) {
      super(props);
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
      this.audio = new Audio(this.url);
      this.togglePlay = this.togglePlay.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.onKeyPressed = this.onKeyPressed.bind(this);
     
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPressed)
       }

    togglePlay() {
       this.audio.play() 
       this.props.setSound("Heater");
    }
    

    onKeyPressed(e) {
        if(e.key === 'S'){
            console.log('Clap');
            this.togglePlay();
        }
      }

      
  
  
    render() {
      return (
        <div>
        <div className="drum-pad" id="S"
        onClick={this.togglePlay}>S 
        <audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
        </div>
        </div>
      );
    }
  }


