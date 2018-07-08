
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
    this.state = ({sound:""})
  }


  setSound = (sound) => {
    this.setState({sound})
  }
  


  render() {
   return (
    <div id='Container'>
     <h1>{this.state.sound}</h1> 
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
   );
  }
 }





  ReactDOM.render(<App/>, document.getElementById("app"));