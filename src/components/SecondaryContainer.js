import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies } = useSelector(
    (store) => store.movies
  );

  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-40 md:pl-12 pl-5 relative z-10">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}></MovieList>
        <MovieList title={"Popular"} movies={popularMovies}></MovieList>
        <MovieList title={"Top Rated"} movies={topRatedMovies}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
