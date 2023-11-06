/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Salut je débute en react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WR
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      country: 'Ivory Coast'
    };
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            {this.state.country} 
          </p>
          <p>Cliquer sur <mark>I'm from</mark> pour connaître ma ville de résidence</p>
          <button onClick={ () => {this.setState({country:'Abidjan'})}}>
          I'm from</button>
          <a
          className='App-link'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;