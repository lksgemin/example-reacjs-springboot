import React from "react";
import "./FilterPessoa.css";

function template() {
  return (
    <div className="filter-pessoa">      
      <section>
        <fieldset>
          <legend><b> Filtros </b> </legend>
          <div className="row">
            <div className="col s3">
              <div className="input-field col s12">
                <input id="nomeFiltro" type="text" className="validate"/>
                <label>Nome</label>
              </div>
            </div>
            <div className="col s3">
              <div className="input-field col s12">
                <input id="cpfFiltro" type="text" className="validate"/>
                <label>CPF</label>
              </div>
            </div>
            <div className="col s3">
              <div className="input-field col s12">
               <input id="emailFiltro" type="email" className="validate"/>
                <label>Email</label>
              </div>
            </div>
            <div className="col s3">
              <div className="input-field col s12">
                <input id="nomeFiltro" type="text" className="validate"/>
                <label>Data Nascimento</label>
              </div>  
            </div>            
          </div>         
        </fieldset>
      </section>
    </div>

  );
};

export default template;
