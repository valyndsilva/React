import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source(); // cancel the request if component is unmounted

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, { cancelToken: source.token }); // cancel the request if component is unmounted

        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        // console.log(`Error:${err.message}`);
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        // isMounted && setTimeout(() => setIsLoading(false), 2000); // remove in production
        isMounted && setIsLoading(false);
      }
    };
    fetchData(dataUrl);
    return () => {
      isMounted = false;
      source.cancel(); // cancel the request with axios
    };
  }, [dataUrl]);
  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
