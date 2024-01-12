import React from 'react';

type CodeComponentProps = {
  code: string;
};


const CodeComponent = (props: CodeComponentProps) => {

  // Função para adicionar números de linha
  const renderCodeWithLineNumbers = (code: string) => {
    return code.split('\n').map((_, index) => (
      <div key={index}>
        <div className='flex h-6 items-center w-20 justify-end pr-7'>
          <span className='font-JetBrains font-normal text-sm text-menuText'>{index + 1}</span>
        </div> 

        {'\n'}
      </div>
    ));
  };

  return (
    <div className='flex'>
      <div className='flex flex-col mt-[15px]'>
        { renderCodeWithLineNumbers(props.code) }
      </div>
      <pre className='mt-[15px]'>
        <code className='font-JetBrains text-sm'>
          { props.code }
        </code>
      </pre>
    </div>
  );
};

export default CodeComponent;
