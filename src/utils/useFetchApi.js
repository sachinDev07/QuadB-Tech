import { useEffect, useState } from "react";

import { MOVIE_LISTS_API } from "../constant";

const useFetchApi = () => {
  const [movielists, setMoviesLists] = useState([]);

  async function fetchApi() {
    const response = await fetch(MOVIE_LISTS_API);
    const data = await response.json();
    setMoviesLists(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { movielists };
};

export default useFetchApi;
