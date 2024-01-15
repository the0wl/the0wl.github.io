import React, { useContext } from 'react';
import OpenFiles from './OpenFiles';
import CodeComponent from './CodeComponent';
import { FilesContext } from '../../contexts/FilesContext';
import { VscBell } from 'react-icons/vsc';

function Editor() {
  const { files } = useContext(FilesContext);

  return (
    <div className='flex h-screen flex-col flex-grow font-Inter text-menuText'>
      <OpenFiles />

      <div className='flex h-screen bg-[#1f1f1f]'>
        { 
          files.findIndex(file => !file.closed) === -1
            ? (<></>)
            : files.map((file, index) => {
              if(file.focused) {
                return (
                  <CodeComponent key={index} code={file.content} />
                );
              }
            })
        }
      </div>

      <div className='flex h-5 pr-3 gap-4 items-center justify-end bg-primary'>  
        <div className='flex h-full items-center'>
          <span className='text-xs'>Ln 1, Col 1</span>
        </div>
        <div className='flex h-full items-center'>
          <span className='text-xs'>Spaces: 2</span>
        </div>
        <div className='flex h-full items-center'>
          <span className='text-xs'>UTF-8</span>
        </div>
        <div className='flex h-full items-center'>
          <span className='text-xs'>LF</span>
        </div>
        <div className='flex h-full gap-2 items-center'>
          <span className='text-xs'>HTML</span>
        </div>
        <div className='flex h-full items-center text-sm'>
          <VscBell />
        </div>
      </div>
    </div>
  );
}

export default Editor;