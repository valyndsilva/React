import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get('/refresh', { withCredentials: true }); // the option 'withCredentials' set to true allows us to send secure cookies(that holds the response token) with our request.
    setAuth((prev) => {
      console.log(JSON.stringify(prev)); //look at prev state to compare
      console.log(response.data.accessToken); // look at the access token we receive from the endpoint after the refresh token is verified.
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken; // return new access token to use it with the request.
  };

  return refresh;
};

export default useRefreshToken;

// When using JWT, store access token in app state. Don't put it in localStorage or in a cookie that can be accessed by jasvaScript. And store the refresh token in a http only secure cookie that is not accessed by javascript but can be sent back to that refresh endpoint and recognize to get a new access token.
