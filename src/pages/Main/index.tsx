import { Explorer, Editor } from '../../components';

function Main() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className='flex flex-col bg-primary text-white'>
        <div className='flex flex-grow'>
          <Explorer/>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default Main;
