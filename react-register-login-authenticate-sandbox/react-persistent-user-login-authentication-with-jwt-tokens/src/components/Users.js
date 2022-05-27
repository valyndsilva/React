import React, { useState, useEffect } from 'react';
// import axios from '../api/axios';
// import useRefreshToken from '../hooks/useRefreshToken';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
const Users = () => {
  const [users, setUsers] = useState();
  //   const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController(); // cancels request if component unmounts to cancel any pending requsts

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/users', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };
    getUsers();
    return () => {
      //cleanUp function
      isMounted = false;
      controller.abort();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display.</p>
      )}
      {/* To test the refresh token */}
      {/* <button onClick={() => refresh()}>Refresh</button> 
      <br /> */}
    </article>
  );
};

export default Users;
