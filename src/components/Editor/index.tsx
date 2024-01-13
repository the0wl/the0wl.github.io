import React, { useContext } from 'react';
import OpenFiles from './OpenFiles';
import CodeComponent from './CodeComponent';
import { FilesContext } from '../../contexts/FilesContext';

function Editor() {
  const { files } = useContext(FilesContext);

  return (
    <div className='flex flex-col flex-grow'>
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
    </div>
  );
}

export default Editor;