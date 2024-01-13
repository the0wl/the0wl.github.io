import React from 'react';
import { Explorer, Editor } from '../../components';

function Main() {
  return (
    <div className='flex flex-col'>
      <div className='flex w-100vw bg-warningBg p-1 pl-4'>
        <span className='text-warningText bg-warningBg text-sm'>Esta página está em processo de desenvolvimento, coisas estranhas podem serem encontradas 🙈</span>
      </div>
      <div className='flex w-100vw h-100vh bg-primary text-white'>
        <div className='flex flex-grow'>
          <Explorer/>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default Main;
