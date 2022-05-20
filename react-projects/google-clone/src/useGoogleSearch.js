import { useState, useEffect } from "react";
import API_KEY from "./keys";

// Copy Search engine ID:  https://cse.google.com/cse/create/new
const CONTEXT_KEY = "4789ba3d9f78400f7";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fire this code every time the term changes
    const fecthData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fecthData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
