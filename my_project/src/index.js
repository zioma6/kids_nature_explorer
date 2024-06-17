import React from 'react';
import App from './components/App';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) jeśli używasz TypeScript
root.render(<App/>);