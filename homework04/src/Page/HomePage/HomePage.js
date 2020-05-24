import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../Helpers/movies-api";
import MoviesList from "../../Components/Movies/Movies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTrendingMovies()
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => setError(error))
      .finally((isLoading) => setLoading(false));
  }, []);

  return (
    <>
      {error && toast.error("Something went wrong!")}
      {isLoading && <Loader />}

      {movies && !error && !isLoading && (
        <div className>
          <p className>Trending today</p>

          <MoviesList movies={movies} />
        </div>
      )}
    </>
  );
};
export default HomePage;
