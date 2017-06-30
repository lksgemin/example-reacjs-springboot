import React from 'react';
import ReactDOM from 'react-dom';
import PessoasDetalhe from './PessoasDetalhe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PessoasDetalhe />, div);
});
