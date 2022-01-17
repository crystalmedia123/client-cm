import React from 'react';
import ReactDOM from 'react-dom';
import { CoinProvider } from './CoinProvider';
import App from './App';

//debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER

ReactDOM.render(
  <CoinProvider>
    <App />
  </CoinProvider>,

  document.getElementById('root')
);
