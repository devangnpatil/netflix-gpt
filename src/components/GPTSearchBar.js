import React, { useEffect, useRef, useState } from "react";
import lang from "./utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "./utils/openai";
import { API_OPTIONS } from "./utils/Constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "./utils/gptSlice";
const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLangauage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // async function main() {
  //   const chatCompletion = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: "Say this is a test" }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(chatCompletion);
  // }

  // useEffect(() => {
  //   // main();
  // }, []);
  const handleGptSearch = async () => {
    const text = searchText.current.value;

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      text +
      ". only give me names of 5 movies, comma separated. if there is no movie, just say 'no movie found'. Example Result: Gadar, Sholay, Don, Golmal, Koi mil gaya";

    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: text }],
    //   gptQuery,
    //   model: "gpt-3.5-turbo",
    // });
    // if (!gptResult?.choices) {
    //   setContent(
    //     "Andaz Apna Apna, 3 Idiots, Munna Bhai M.B.B.S., Hungama,Garam Masala"
    //   );
    // } else {
    //   setContent(gptResult?.choices?.[0]?.message?.content);
    // }
    const gptMovies =
      "Andaz Apna Apna, 3 Idiots, Munna Bhai M.B.B.S., Hungama,Garam Masala".split(
        ","
      );
    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(`query=${movie}`)
    );

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResult: tmdbResults })
    );
  };
  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?" + movie,
      API_OPTIONS
    );
    const response = await data.json();
    return response;
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black text-white grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[selectedLangauage].gptSearchPlaceholder}
          className="p-4 m-4 rounded-lg col-span-9 text-gray-500"
        />
        <button
          className="text-white font-bold py-2 px-4 rounded-lg bg-red-500  cursor-pointer col-span-3 m-4"
          onClick={handleGptSearch}
        >
          {lang[selectedLangauage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
