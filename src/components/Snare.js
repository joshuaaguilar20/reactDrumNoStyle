import React from 'react'


export default class Snare extends React.Component {
    constructor(props) {
      super(props);
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
      this.audio = new Audio(this.url);
      this.togglePlaySnare = this.togglePlaySnare.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.onKeyPressed2 = this.onKeyPressed2.bind(this);
    }
    
     
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPressed2)
       }

    togglePlaySnare() {
       this.audio.play()
       this.props.setSound("Open HH");
    }
    onKeyPressed2(e) {
        if(e.key === 'D'){
            console.log('OPEN-HH');
            this.togglePlaySnare();
        }
    }
     
  
    render() {
      return (
        <div>
        <div className="drum-pad" id="D"
        onClick={this.togglePlaySnare}>D
        <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
        </div>
        </div>
      );
    }
  }