import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: ''
    }
  }

  componentDidMount(){
    axios
    // .get('http://backend/users/me')
    .get('localhost:3001/users/me')
    .then((res) => {
        this.setState({name:res.data})
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Etfasdft <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.name}
          </a>
        </header>
      </div>
    );
  }
}


export default App;
