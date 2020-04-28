import React from 'react';
import './App.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { userInput: '' }
    this.handleUserInput = this.handleUserInput.bind(this)
  }
  
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  
  render() {
    return (
      <div className="center">
        <h1> Type below to see you message appear.</h1>
        <input value={this.state.userInput} onChange={this.handleUserInput} type="text" />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;
