import React, { useContext } from 'react';
import { FilesContext } from '../../contexts/FilesContext';
import ExplorerItem from './ExplorerItem';

function Explorer() {
  const { files } = useContext(FilesContext);

  return (
    <div className='flex flex-col w-64 h-screen bg-primary font-Inter text-menuText'>
      <div className='flex h-9 gap-2 items-center pl-4 cursor-default text-sm font-semibold'>
        <span className='text-contrast'>the0wl</span>
        <span>Studio Code</span>
      </div>

      { 
        files.map((file, index) => <ExplorerItem 
          file={file} 
          key={index}
        />)
      }
    </div>
  );
}

export default Explorer;