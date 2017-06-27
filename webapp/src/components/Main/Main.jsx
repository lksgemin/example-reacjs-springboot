import "./Main.css";
import React from "react";
import FilterPessoa from ".././FilterPessoa";
import ListPaginator from ".././ListPaginator";

function template() {
  return (
    <div className="main container">
      <FilterPessoa/>
      <ListPaginator/>
    </div>
  );
};

export default template;
