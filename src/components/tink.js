import React from 'react'

export default class Tink extends React.Component {
    constructor(props) {
      super(props);
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
      this.audio = new Audio(this.url);
      this.togglePlayTink = this.togglePlayTink.bind(this);
      this.onKeyPressed = this.onKeyPressed.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
    }
  
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPressed)
       }

    togglePlayTink() {
       this.audio.play() 
       this.props.setSound("Kicker");
    }
    

    onKeyPressed(e) {
        if(e.key === 'X'){
            console.log('KICK');
            this.togglePlayTink();
        }
      }

    
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlayTink} className="drum-pad" id="X">'X'</button>
        </div>
      );
    }
  }






















