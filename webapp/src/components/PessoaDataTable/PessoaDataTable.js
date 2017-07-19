import React from "react";
import template from "./PessoaDataTable.jsx";

class PessoaDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    console.log("delete");

  }

  render() {
    return template.call(this);
  }
}

export default PessoaDataTable;
