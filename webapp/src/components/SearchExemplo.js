import React, { Component } from 'react';
import Exemplo from '../services/Exemplo';

class SearchExemplo extends Component {
  constructor(props) {
    super(props);
    this.exemploService = new Exemplo();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function(e){
    e.preventDefault();
    this.exemploService.getExemplo().then(function(response){
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleClick}>
            <button type="submit"  value="Teste" />
          </form>
        </div>
      </div>
    );
  };

  
}

export default SearchExemplo;
