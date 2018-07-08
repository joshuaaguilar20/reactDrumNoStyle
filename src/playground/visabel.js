

const app = document.getElementById("app");

 let toggleText = true;



const toggleOn = () => {
toggleText = !toggleText
renderFunction()
};



const renderFunction = () => {
    let one =
<div>
    <h1>Visabilty Button</h1>
      <button onClick={toggleOn}>{toggleText ? 'Show' : 'Hide'}</button>
       <p>{toggleText ? '' : 'Shows some big secret message hehe I am so happy my react toggle button actually worked hahaha'}</p>
</div>
ReactDOM.render(one, app);
};

renderFunction();



export default class Music extends React.Component {
    constructor(props) {
      super(props);
      this.state = { play: true };
      this.url ="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav";
      this.audio = new Audio(this.url);
      this.togglePlay = this.togglePlay.bind(this);
    }
  
    togglePlay() {
      this.setState({ play: true });
      console.log(this.audio);
      this.state.play ? this.audio.play() : this.audio.pause();
    }
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'clap' : 'someother sound'}</button>
        </div>
      );
    }
  }
