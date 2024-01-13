import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { Main } from './pages';
import { FilesProvider } from './contexts/FilesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className='antialiased'>
      <FilesProvider>
        <Main/>
      </FilesProvider>
    </div>
  </React.StrictMode>
);
