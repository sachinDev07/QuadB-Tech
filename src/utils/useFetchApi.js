import { useEffect, useState } from "react";

const useFetchApi = () => {
  const [movielists, setMoviesLists] = useState([]);

  async function fetchApi() {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
    const data = await response.json();
    setMoviesLists(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { movielists };
};

export default useFetchApi;
