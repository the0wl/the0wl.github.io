import React from 'react';
import { Explorer, Editor } from '../../components';

function Main() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className='flex bg-primary text-white'>
        <div className='flex flex-grow'>
          <Explorer/>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default Main;
