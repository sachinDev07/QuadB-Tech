import { useState, useEffect } from "react";
import Lists from "./Lists";

const MoviesLists = () => {
  const [movielists, setMoviesLists] = useState([]);

  async function fetchApi() {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
    const data = await response.json();
    setMoviesLists(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="md:w-[1200px] mx-auto my-8">
      <div className="bg-blue-500 py-4 mb-4 md:rounded-md">
        <h1 className="text-white text-4xl font-bold pl-4">Movies Lists</h1>
      </div>
      <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {movielists.map((show) => (
          <div key={show.show.id} className="p-4">
            {show.show && (
              <>
                <Lists
                  id={show.show.id}
                  poster={show.show.image?.medium}
                  movieName={show.show.name}
                  movieType={show.show.type}
                  genre={show.show.genres}
                  status={show.show.status}
                  rating={show.show.rating.average}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesLists;
