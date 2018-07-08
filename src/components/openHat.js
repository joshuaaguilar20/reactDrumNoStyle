import React from 'react'
 
 
 export default class OpenHat extends React.Component {
    constructor(props) {
      super(props);
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
      this.audio = new Audio(this.url);
      this.togglePlay = this.togglePlay.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this)
      this.onKeyPressed = this.onKeyPressed.bind(this)
    }

    componentDidMount() {
      document.addEventListener("keydown", this.onKeyPressed)
     }

      togglePlay() {
     this.audio.play() 
     this.props.setSound("Heater-3");
  }
      onKeyPressed(e) {
      if(e.key === 'E'){
          console.log('HEATER 3');
          this.togglePlay();
      }
  }
  
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay} className="drum-pad" id="E"> 'E'</button>
        </div>
      );
    }
  }
