import React, { Component } from 'react';
import './App.css';
import Header from './components/header'; 
//import LoadText from './components/texts/yellow';
import Texty from './components/texts/yellow.json';

let theWork = Texty.text.split(' ');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      isOn: false
    }

    this.startCounter = this.startCounter.bind(this)
    this.stopCounter = this.stopCounter.bind(this)
    this.resetCounter = this.resetCounter.bind(this)
  }

  startCounter() {
    this.setState({
      isOn: true,
      seconds: this.state.seconds
    })
    this.counter = setInterval(() => this.setState({
      seconds: this.state.seconds + 1
    }), 485);
  }

  stopCounter() {
    this.setState({isOn: false})
    clearInterval(this.counter)
  }

  resetCounter() {
    this.setState({seconds: 0, isOn: false})
    clearInterval(this.counter)
  }
  
  render() {

    let start = (this.state.seconds === 0) ?
      <button className="control" onClick={this.startCounter}>start</button> : 
      null
    
    let stop = (this.state.seconds === 0 || !this.state.isOn) ?
      null : 
      <button className="control" onClick={this.stopCounter}>stop</button>

    let resume = (this.state.seconds === 0 || this.state.isOn) ?
      null :
      <button className="control" onClick={this.startCounter}>resume</button>

    let reset = (this.state.seconds === 0 || this.state.isOn) ?
      null :
      <button className="control" onClick={this.resetCounter}>reset</button>

    //let word = [];
    //while (this.state.seconds < theWork.length) {
    //  word.push(theWork[this.state.seconds]);
    //}
    let lastWord = theWork[this.state.seconds];
    let word = theWork[this.state.seconds + 1];
    let nextWord = theWork[this.state.seconds + 2];

    return (
      <div className="App">
        <Header />
        <div className="row">
          <h2 className="righty unfocused col-4">{lastWord}</h2>
          <h2 className="center focused col-4">{word}</h2>
          <h2 className="lefty unfocused col-4">{nextWord}</h2>
        </div>
        <div className="center">
          {start}
          {resume}
          {stop}
          {reset}
        </div>
      </div>
    );
  }
}

export default App;
