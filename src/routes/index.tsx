import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import { StateContextProvider } from '../context/AppCharacterContext';

const container = document.getElementById( 'app' );
const root = ReactDOM.createRoot( container );
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);