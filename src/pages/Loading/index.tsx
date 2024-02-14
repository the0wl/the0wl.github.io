import { useState, useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import Main from '../Main';

function Loading() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 7000)
  }, [])

  return loading ? <LoadingScreen /> : <Main />
}

export default Loading;
