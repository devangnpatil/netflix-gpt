import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GPTMovieSuggestions = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  if (!movieResult) return null;
  console.log(movieResult);
  // debugger;
  return (
    <div className="p-4 m-4 bg-black">
      {movieNames.map((movie, index) => {
        return (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResult[index].results}
          />
        );
      })}
    </div>
  );
};

export default GPTMovieSuggestions;
