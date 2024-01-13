import React, { useContext } from 'react';
import { FileIcon } from '../../index';
import { VscChromeClose } from 'react-icons/vsc';
import { FilesContext } from '../../../contexts/FilesContext';

function OpenFiles() {
  const { files, setFiles } = useContext(FilesContext);
  
  const handleOnFocus = function (e: React.MouseEvent, fileName: string) {
    e.preventDefault();

    setFiles(
      files.map(file => ({
        ...file, 
        focused: file.name === fileName
      }))
    );
  };

  const handleOnClose = function (e: React.MouseEvent, fileName: string) {
    e.preventDefault();

    const filePos = files.findIndex(file => file.name === fileName);
    
    const newFiles = files.map(file => ({
      ...file, 
      closed: file.closed ? file.closed : file.name === fileName
    }));

    const newFocusedFile = filePos === newFiles.length - 1
      ? files.findIndex(file => file.focused === false)
      : filePos + 1;

    if (newFocusedFile !== -1) {
      setFiles(
        newFiles.map((file, index) => ({
          ...file, 
          focused: index === newFocusedFile
        }))
      );
    } else {
      setFiles(newFiles);
    }
  };

  return (
    <div className='flex font-Inter h-9'>
      { files.map((file, index) => {
        if (!file.closed) return (
          <div 
            className={`flex h-full items-center ${file.focused ? 'bg-openFilesSelected' : ''}`}
            key={index}>
            <div
              onClick={(e) => handleOnFocus(e, file.name)}
              className='flex h-full items-center pl-3 text-sm cursor-pointer'>
          
              <div className='flex items-center pr-2'>
                <FileIcon isFolder={false} filename={file.name} />
              </div>
          
              <span>{file.name}</span>
            </div>
            <button 
              onClick={(e) => handleOnClose(e, file.name)}
              className={`flex items-center px-3 ${file.focused ? '' : 'text-[#1e1e1e]'}`}>
              <VscChromeClose />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default OpenFiles;