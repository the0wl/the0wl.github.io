import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Loading } from './pages';
import { FilesProvider } from './contexts/FilesContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='antialiased'>
      <FilesProvider>
        <Loading/>
      </FilesProvider>
    </div>
  </React.StrictMode>,
);
