import React from "react";
import lang from "./utils/languageConstants";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
  const selectedLangauage = useSelector((store) => store.config.lang);
  console.log(selectedLangauage);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 bg-black text-white grid grid-cols-12 rounded-lg">
        <input
          type="text"
          placeholder={lang[selectedLangauage].gptSearchPlaceholder}
          className="p-4 m-4 rounded-lg col-span-9"
        />
        <button className="text-white font-bold py-2 px-4 rounded-lg bg-red-500  cursor-pointer col-span-3 m-4">
          {lang[selectedLangauage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
