import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { Main } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className='antialiased'>
      <Main/>
    </div>
  </React.StrictMode>
);
