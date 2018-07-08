import React from 'react'
 
 
 export default class Boom extends React.Component {
    constructor(props) {
      super(props);

      this.url ="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
      this.audio = new Audio(this.url);
      this.togglePlayBoom = this.togglePlayBoom.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.onKeyPressedBoom = this.onKeyPressedBoom.bind(this);
    }
    
     
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPressedBoom)
       }

    togglePlayBoom() {
       this.audio.play() 
       this.props.setSound("Heater Four");
    }
    onKeyPressedBoom(e) {
        if(e.key === 'A'){
            console.log('HEATER 4');
            this.togglePlayBoom();
        }
      }


  
    render() {
      return (
        <div>
          <button onClick={this.togglePlayBoom}> 'A'</button>
        </div>
      );
    }
  }





