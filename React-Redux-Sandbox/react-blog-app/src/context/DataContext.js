import { useState, useEffect, createContext } from 'react';

import useAxiosFetch from '../hooks/useAxiosFetch';
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: 'Post 1',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  //   {
  //     id: 2,
  //     title: 'Post 2',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  //   {
  //     id: 3,
  //     title: 'Post 3',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  //   {
  //     id: 4,
  //     title: 'Post 4',
  //     datetime: 'January 01, 2022',
  //     body: 'lorem ipsum dolor sit amet, consectet',
  //   },
  // ]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  // const { data, fetchError, isLoading } = useAxiosFetch(
  //   'http://localhost:3500/posts'
  // );
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  //Remove the code snippet below and replace with the useAxiosFetch hook snippet
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       // Axios automatically creates the response.json() unlike when you use fetch().
  //       // Axios also automatically catches errors when they are not in the 200 range of http responses.
  //       // if (!response.ok) throw Error('Did not receive expected data'); // This is not required with axios as it checks
  //       // if (response && response.data)
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         //Got reponse from back-end API but not in 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         // No response, catches all the errors
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  // Display Posts Search Results
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse()); // newest post at the top
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
