import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PrimeReactProvider } from 'primereact/api';
import './index.css';

// efecto ripple en botones
const primereactConfig = {
  ripple: true,
};

//renderiza el componente App en el elemento id root usando el proveedpr de primereact

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider value={primereactConfig}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);