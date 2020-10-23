import { useState, useEffect } from "react";

const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;
const API_KEY = process.env.REACT_APP_KEY;

// Custom Hook
// term is the value from search bar
export default function useGoogleSearch(term) {
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
}
