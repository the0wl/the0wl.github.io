import React from 'react';
import { Explorer, Editor } from '../../components';

function Main() {
  return (
    <div className='flex w-100vh h-100vh bg-primary text-white'>
      {/* <Sidebar /> */}
      <div className='flex flex-grow'>
        <Explorer />
        <Editor />
      </div>
    </div>
  );
}

export default Main;
