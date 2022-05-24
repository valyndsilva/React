import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';
import axios from './api/axios';
const LOGIN_URL = '/auth'; // matches the back-end webserver in the nodejs course.

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(); // allows to set focus on user input when component loads
  const errRef = useRef(); // allows to set focus on that when error occurs to allow screen readers to announce error for accessibility.

  // User field state
  const [user, setUser] = useState('');
  // Password Field State
  const [pwd, setPwd] = useState('');
  // Error state if error occurs and success state if it's a success
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // set focus when component loads
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // clear errMsg when user corrects the error in the user or pwd fields
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    //If not using a back-end server use the  lines below:
    // console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);

    // Using axios to submit to the back-end web server created in the node.js course:
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response)); // use stringify to avoid getting Obj{Obj}
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      //clear state and controlled inputs
      //need value attribute on inputs for this
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive" //if focused on error message screen reader announces the error
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <button>Sign In</button>
            {/* since it's the only buttn in the form you don't need to use the onClick() here. It triggers a submit event when clicked. So we need to handle the submit event with the form. */}
          </form>
          <p>
            Need an Account? <br />
            <span className="line">
              {/*put router link here*/}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
