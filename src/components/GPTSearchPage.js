import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "./utils/Constant";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="main" src={BG_URL}></img>
      </div>
      <GPTSearchBar></GPTSearchBar>
      <GPTMovieSuggestions></GPTMovieSuggestions>
    </div>
  );
};

export default GPTSearchPage;
