import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/css/index.css';
import { GymFlowProvider } from './context/flow-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GymFlowProvider>
      <App />
    </GymFlowProvider>
  </React.StrictMode>
);
