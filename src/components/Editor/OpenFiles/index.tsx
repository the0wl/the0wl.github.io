import React from 'react';
import { FileIcon } from '../../index';
import { VscChromeClose } from 'react-icons/vsc';

export type FileType = {
  name: string;
  focused: boolean;
}

export type OpenFilesProps = {
  files: FileType[];
  setFiles: (files: FileType[]) => void;
}

function OpenFiles(props: OpenFilesProps) {
  const handleOnClick = function (fileName: string) {
    props.setFiles(
      props.files.map(file => ({
        ...file, 
        focused: file.name === fileName
      })
      ));
  };

  return (
    <div className='flex font-Inter'>
      { props.files.map((file, index) => (
        <div 
          key={index} 
          onClick={() => handleOnClick(file.name)}
          className={`flex h-9 items-center px-3 text-sm cursor-pointer
          ${file.focused ? 'bg-openFilesSelected' : ''}`}>
          
          <div className='flex items-center pr-2'>
            <FileIcon isFolder={false} filename={file.name} />
          </div>
          
          <span>{file.name}</span>

          <div className={`flex items-center pl-3 ${file.focused ? '' : 'text-[#1e1e1e]'}`}>
            <VscChromeClose />
          </div>
        </div>
      ))}
    </div>
  );
}

export default OpenFiles;