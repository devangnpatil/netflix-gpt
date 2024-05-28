import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "./utils/Constant";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img alt="main" src={BG_URL} className="h-screen object-cover"></img>
      </div>
      <div>
        <GPTSearchBar></GPTSearchBar>
        <GPTMovieSuggestions></GPTMovieSuggestions>
      </div>
    </>
  );
};

export default GPTSearchPage;
