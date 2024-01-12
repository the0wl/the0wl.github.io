import React from 'react';
import { VscChevronRight  } from 'react-icons/vsc';
import { FileIcon } from '../index';

function Files() {
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

      <div className='flex h-8 hover:bg-menuHover cursor-pointer'>
        <div className='flex items-center pl-8 pr-2'>
          <FileIcon isFolder={false} filename='.gitignore'/>
        </div>
        <span className='text-sm leading-8'>.gitignore</span>
      </div>

      <div className='flex h-8 hover:bg-menuHover cursor-pointer'>
        <div className='flex items-center pl-8 pr-2'>
          <FileIcon isFolder={false} filename='index.html'/>
        </div>
        <span className='text-sm leading-8'>index.html</span>
      </div>

      <div className='flex h-8 hover:bg-menuHover cursor-pointer'>
        <div className='flex items-center pl-8 pr-2'>
          <FileIcon isFolder={false} filename='package.json'/>
        </div>
        <span className='text-sm leading-8'>package.json</span>
      </div>

    </div>
  );
}

export default Files;