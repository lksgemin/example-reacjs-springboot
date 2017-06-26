import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchExemplo from './components/SearchExemplo';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<SearchExemplo/>, document.getElementById('root'));
registerServiceWorker();
