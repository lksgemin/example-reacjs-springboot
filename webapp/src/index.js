import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import PessoasDetalhe from './PessoasDetalhe';
import NotFound from './NotFound';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path='/' exact component={App} />
            <Route path='/pessoas/:id' component={PessoasDetalhe}/>
            <Route component={NotFound} />
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
