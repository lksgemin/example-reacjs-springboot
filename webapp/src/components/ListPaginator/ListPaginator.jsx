import React from "react";
import "./ListPaginator.css";

function template() {
  return (
    <div>
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th></th>
            <th></th>            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td><a href="#!"><i className="material-icons">mode_edit</i></a></td>
            <td><a href="#!"><i className="material-icons">delete</i></a></td>            
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td><a href="#!"><i className="material-icons">mode_edit</i></a></td>
            <td><a href="#!"><i className="material-icons">delete</i></a></td>  
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td><a href="#!"><i className="material-icons">mode_edit</i></a></td>
            <td><a href="#!"><i className="material-icons">delete</i></a></td>  
          </tr>
        </tbody>
      </table>
      <ul className="pagination">
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        <li className="active"><a href="#!">1</a></li>
        <li className="waves-effect"><a href="#!">2</a></li>
        <li className="waves-effect"><a href="#!">3</a></li>
        <li className="waves-effect"><a href="#!">4</a></li>
        <li className="waves-effect"><a href="#!">5</a></li>
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  );
};

export default template;
