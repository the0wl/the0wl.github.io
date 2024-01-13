import React, { useContext } from 'react';
import { VscChevronRight  } from 'react-icons/vsc';
import { FileIcon } from '../index';
import { FilesContext } from '../../contexts/FilesContext';

function Explorer() {
  const { files, setFiles } = useContext(FilesContext);

  const handleOnClick = function (e: React.MouseEvent, fileName: string) {
    e.preventDefault();

    const filePos = files.findIndex(file => file.name === fileName);

    const newFiles = files.map((file, index) => ({
      ...file, 
      closed: index === filePos ? false : file.closed,
      focused: index === filePos
    }));

    setFiles(newFiles);
  };

  return (
    <div className='flex flex-col w-64 h-screen bg-primary font-Inter text-menuText'>
      <div className='flex h-9 items-center pl-4 cursor-default'>
        <span className='text-sm'>Portifólio Studio Code</span>
      </div>

      <div className='flex h-8 mt-1 pl-3 hover:bg-menuHover cursor-pointer'>
        <div className='flex items-center'>
          <VscChevronRight />
        </div>
        <div className='flex items-center pl-1 pr-2'>
          <FileIcon isFolder={true} />
        </div>
        <span className='text-sm leading-8'>.github</span>
      </div>

      { 
        files.map((file, index) => {
          return (
            <div 
              key={index} 
              className='flex h-8 hover:bg-menuHover cursor-pointer'
              onClick={(e) => handleOnClick(e, file.name)}>
              <div className='flex items-center pl-8 pr-2'>
                <FileIcon isFolder={false} filename={file.name} />
              </div>
              <span className='text-sm leading-8'>{file.name}</span>
            </div>
          );
        })
      }
    </div>
  );
}

export default Explorer;