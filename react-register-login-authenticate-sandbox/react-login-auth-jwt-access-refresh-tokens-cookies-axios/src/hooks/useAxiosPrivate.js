// Create a custom hook to attach the axios interceptors to the axios Private
import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
  const { refresh } = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          // if the config.headers['Authorization'] doesn't exist it will be the first attempt
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    // interceptors are like eventListeners in vanillaJS they get attached but also need to be removed at the end to avoid causing a mess in responses.
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response, // return response if it's ok
      //else return an async error response. Ex: if we have an access token with short lifespan and it expires we end up in the async error handler.
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          // .sent() is a custom property
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept); // remove requestIntercept
      axiosPrivate.interceptors.response.eject(responseIntercept); // remove responseIntercept
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
