import { Component } from 'react';
import template from "./Main.jsx";

class Main extends Component {
  render() {
    return template.call(this);
  }
}

export default Main;
