import React, { useContext } from 'react';
import { FilesContext } from '../../contexts/FilesContext';
import ExplorerItem from './ExplorerItem';
import { VscCode, VscError, VscWarning, VscSourceControl } from 'react-icons/vsc';

function Explorer() {
  const { files } = useContext(FilesContext);

  return (
    <div className='flex flex-col w-64 h-screen bg-primary font-Inter text-menuText'>
      <div className='flex-col h-screen'>
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

      <div className='flex h-5 pl-3 gap-4 items-center bg-primary select-none'>
        <div className='flex h-full items-center'>
          <VscCode />
        </div>  
        <div className='flex h-full gap-1 items-center'>
          <VscSourceControl />
          <span className='text-xs'>master</span>
        </div>
        <div className='flex h-full items-center gap-2'>
          <VscError />
          <span className='text-xs'>0</span>
          <VscWarning />
          <span className='text-xs'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Explorer;