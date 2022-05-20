import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    // console.log(windowSize);
    window.addEventListener('resize', handleResize);

    // cleanUp function inside useEffect prevents a memory leak
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
export default useWindowSize;
