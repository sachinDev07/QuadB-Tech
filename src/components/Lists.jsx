import { Link } from "react-router-dom";
import defaultPoster from "../assets/no-poster.png";

const Lists = ({id, poster, movieName, movieType, genre, status, rating }) => {
  return (
    <div className="md:p-4 flex flex-col shadow-lg py-4 md:rounded-lg">
        <img
          src={poster || defaultPoster}
          alt={movieName}
          className="mb-4 w-full md:rounded-lg"
        />
      <div className="px-2">
        <h2 className="text-xl font-semibold mb-2">{movieName}</h2>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg">{movieType}</p>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg">Genres: {genre.splice(0,2).join(", ")}</p>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg">Status: {status}</p>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg">Rating: {rating}</p>
      </div>
      <Link to={`/summary/${id}`}>
        <div className="px-2 md:px-0">
          <button className="bg-blue-500 hover:bg-blue-600 transition duration-150 ease-linear text-white p-2 mt-2 w-full rounded-sm">
              Show Summary
           </button>
        </div>
          
      </Link>
    </div>
  );
};

export default Lists;


