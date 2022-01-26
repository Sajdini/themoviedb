import { useState, useEffect } from "react";
const useHttp = (apilink) => {
  const [movies, setMovies] = useState();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const ac = new AbortController();
    try {
      async function fetchData() {
        const res = await fetch(apilink, ac.signal);
        const data = await res.json();
        setMovies(data);
        setIsLoading(false);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
    return () => {
      ac.abort();
    };
  }, [setMovies, apilink]);

  return { movies, isLoading };
};

export default useHttp;
