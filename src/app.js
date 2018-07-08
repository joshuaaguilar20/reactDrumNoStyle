
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Clap from './components/clap'
import HiHat from './components/hiHat'
import Kick from './components/kick'
import OpenHat from './components/openHat'
import Boom from './components/boom'
import Ride from './components/Ride'
import Snare from './components/Snare'
import Tink from './components/tink';
import C from './components/C'



 class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({sound:"Click or press key to play sound below"})
  }


  setSound = (sound) => {
    this.setState({sound})
  }
  

  render() {
   return (
    <div id='drum-machine'>
     <h1 id="display">{this.state.sound}</h1> 
      <div className="drum-pads">
     <Clap setSound={this.setSound}/>
     <HiHat setSound={this.setSound}/>
     <OpenHat setSound={this.setSound}/>
     <Boom setSound={this.setSound}/>
     <Ride setSound={this.setSound}/>
     <Snare setSound={this.setSound}/>
     <Kick setSound={this.setSound}/>
     <Tink setSound={this.setSound}/>
     <C setSound={this.setSound}/>
       </div>
    </div>
   );
  }
 }





  ReactDOM.render(<App/>, document.getElementById("app"));