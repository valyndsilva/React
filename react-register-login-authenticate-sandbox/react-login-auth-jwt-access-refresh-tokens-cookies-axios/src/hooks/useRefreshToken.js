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
