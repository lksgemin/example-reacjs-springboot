import React from "react";
import "./PessoaDataTable.css";

function template() {
  const { pessoas } = this.props;
  const pessoasList = pessoas.map((pessoa, key) => {
    return (
      <tr key={key}>
        <td>{pessoa.nome}</td>
        <td>{pessoa.email}</td>
        <td><a href="#!"><i className="material-icons">mode_edit</i></a></td>
        <td><a href="#!" onClick={this.handleClick}><i className="material-icons">delete</i></a></td>
      </tr>
    );
  });
  return (

    <div>
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pessoasList}
        </tbody>
      </table>      
    </div >    
  );
};

export default template;
