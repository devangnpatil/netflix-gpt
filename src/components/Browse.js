import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      {/* 
        // Main video container
          - video background
          - video title
          - button play
          - button more info
        // Secondary Container
          - Movie list * n
            - Cards * n

      */}
    </div>
  );
};

export default Browse;
