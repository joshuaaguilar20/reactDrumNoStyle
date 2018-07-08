import React from 'react'

export default class Kick extends React.Component {
    constructor(props) {
      super(props);
      this.state = { play: true };
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
      this.audio = new Audio(this.url);
      this.togglePlayKick = this.togglePlayKick.bind(this);
      this.onKeyPressed = this.onKeyPressed.bind(this)
    }
  
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPressed)
       }

    togglePlayKick() {
       this.audio.play() 
       this.props.setSound("Kick N Hat");
    }
    

    onKeyPressed(e) {
        if(e.key === 'Z'){
            console.log('Kick N Hat');
            this.togglePlayKick();
        }
      }

    
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlayKick} className="drum-pad" id="Z">'Z'</button>
        </div>
      );
    }
  }