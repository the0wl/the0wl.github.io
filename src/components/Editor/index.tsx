import React, { useEffect, useState } from 'react';
import OpenFiles, { FileType } from './OpenFiles';
import CodeComponent from './CodeComponent';

function Editor() {
  const [fileContent, setFileContent] = useState<string>('');
  const [files, setFiles] = useState<FileType[]>([
    { name: '.gitignore', focused: false },
    { name: 'index.html', focused: true },
    { name: 'package.json', focused: false },
  ]);

  useEffect(() => {
    fetch('/files/index.txt')
      .then(response => response.text())
      .then(text => setFileContent(text))
      .catch(error => console.error('Error fetching the text file:', error));
  }, []);

  return (
    <div className='flex flex-col flex-grow'>
      <OpenFiles files={files} setFiles={setFiles} />
      <div className='flex h-screen bg-[#1f1f1f]'>
        <CodeComponent code={fileContent} />
      </div>
    </div>
  );
}

export default Editor;