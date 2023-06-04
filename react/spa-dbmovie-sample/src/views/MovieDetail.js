import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";

export const MovieDetatil = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MoviesService.getMoviesById(id);
    setMovie(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <h1> {movie.title}</h1>
      <article>{movie.overview}</article>
    </>
  );
};
