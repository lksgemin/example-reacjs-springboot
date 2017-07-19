import React, { Component } from 'react';
import Topo from './components/Topo/Topo';
import PessoaDataTable from "./components/PessoaDataTable/PessoaDataTable";
import PessoaService from "././services/PessoaService"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let pessoaService = new PessoaService();
    pessoaService.getPessoas().then((response) => {
      this.setState({
        listaPessoas: response.data
      })
    });
  }

  render() {
    if(!this.state.listaPessoas) return <p>Loading ... </p>
    return (
      <div>
        <Topo />
        <div className="main container">
          <PessoaDataTable pessoas={this.state.listaPessoas} />
        </div>
      </div>
    );
  }
}

export default App;
