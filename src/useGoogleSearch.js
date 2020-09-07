import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "2a6127ee6c6a31259";

// Custom Hook
// term is the value from search bar
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // When useGoogleSearch used, this will fire the useEffect
  useEffect(() => {
    const fetchData = async () => {
      // links is the end point
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
