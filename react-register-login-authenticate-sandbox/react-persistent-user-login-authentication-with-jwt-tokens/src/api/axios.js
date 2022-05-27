import axios from 'axios';

const BASE_URL = 'http://localhost:3500';

// Here we have 2 identical axios instances.
export default axios.create({
  baseURL: BASE_URL,
});

// Below we attach 'interceptors' to the axiosPrivate that allows to attach JWT tokens for us and even retry when we get a failed request the 1st time. The failure returns status code 403 error which is Forbidden.
// The interceptors work with the JWT token to refresh the token if our initial request is denied due to an expired token. This works in the background and won't impact users in the app (they won't see anything) and will keep everything secure and will continue to refresh the tokens on a set schedule.
// interceptors are like eventListeners in vanillaJS they get attached but also need to be removed to avoid causing a mess in responses.
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
//baseURL, headers, withCredentials will all be attached to every request that is from  axiosPrivate.

// Any time the access token expires the refresh token stored in the secure cookie is sent back to the refresh endpoint by axios. A new access token is received and that is used to complete the request for the Users data.
