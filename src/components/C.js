import React from 'react'

export default class C extends React.Component {
    constructor(props) {
      super(props);
      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
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
       this.props.setSound("Closed H-H");
    }
    

    onKeyPressed(e) {
        if(e.key === 'C'){
            console.log('Closed H-H');
            this.togglePlayTink();
        }
      }

    
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlayTink}>'C'</button>
        </div>
      );
    }
  }






















