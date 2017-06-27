import React, { Component } from 'react';
import Topo from './components/Topo/Topo';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
       <div>
          <Topo/>   
          <Main/>
       </div>   
    );
  }
}

export default App;
