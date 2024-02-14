import { useState, useEffect } from 'react';

function LoadingScreen() {
  const loadingImages : Array<string> = [ 
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg'
  ];

  const loadingText : Array<string> = [ 
    'Carregando coisas desnecessárias ...', 
    'Quase lá!', 
    'Tudo pronto!', 
  ];

  const imagesInterval: number = 3000;
  const [textInterval, setTextInterval] = useState<number>(2100);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const imagesTimer: NodeJS.Timeout = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % loadingImages.length);
    }, imagesInterval);

    return () => clearInterval(imagesTimer);
  }, [loadingImages.length, imagesInterval]);

  useEffect(() => {
    const textTimer: NodeJS.Timeout = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % loadingText.length);
      setTextInterval((prevValue) => prevValue - 700 <= 700 ? 4800 : prevValue - 700);
    }, textInterval);

    return () => clearInterval(textTimer);
  }, [loadingText.length, textInterval]);

  useEffect(() => {
    const interval = 7000 / 100;
    
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prevProgress + 2;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [progress]);
  
  return (
    <div className='flex items-center justify-center w-screen h-screen overflow-hidden bg-menuHover'>
      <div className={`flex bg-primary overflow-hidden
        lg:h-[768px] lg:w-[1024px] lg:rounded-lg lg:shadow-lg
        md:h-[500px] md:w-[800px] md:rounded-md
        sm:h-[500px] sm:w-[800px] sm:rounded-md
        ${progress >= 99 ? 'animate-shrinkbox' : ''}
        `}>
        {progress <= 98 ? (
          <>
            <div className='flex h-full
              lg:w-[624px]'>
              {loadingImages.length > 0 && (
                <img src={loadingImages[currentImageIndex]} className='object-cover w-full h-full' />
              )}
            </div>
            
            <div className='flex flex-col h-full bg-primary justify-between
              lg:w-[400px] lg:py-24'>
              <div className='flex flex-col'>
                <div className='flex w-full justify-center'>
                  <img className='w-[64px] h-[64px]' src="./images/icons8-coruja-90.png" alt="owl"/>
                </div>
                <div className='flex justify-center gap-2 py-4'>
                  <span className='text-[#2ECC71] text-[28px] font-Inter font-semibold'>the0wl</span>
                  <span className='text-white font-semibold text-[28px] font-Inter'>Studio</span>
                  <span className='text-white font-semibold text-[28px] font-Inter'>Code</span>
                </div>
                <div className='flex w-full justify-center'>
                  <span className='text-[#7D7D7D] text-[14px] font-Inter font-medium'>
                    Powered by Kelvin Isael Seibt
                  </span>
                </div>
              </div>

              <div className='flex flex-col w-full items-center justify-center px-12 gap-4'>
                <span className='text-[#7D7D7D] text-[14px] font-Inter font-medium'>
                  { loadingText[currentTextIndex] }
                </span>
                <div className='flex w-full h-2 bg-[#1F1F1F] rounded-sm'>
                  <div 
                    style={{ width: `${progress}%` }} 
                    className={`h-full bg-[#2ECC71] rounded-sm`}>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='flex w-full items-center justify-center'>
            <img className='w-[64px] h-[64px]' src="./images/icons8-coruja-90.png" alt="owl"/>
          </div>
        )}
      </div>
    </div>
  );
}

  export default LoadingScreen;