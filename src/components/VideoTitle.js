import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen aspect-video absolute md:pt-[18%] px-[10%] text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-2xl py-6 w-1/2">{overview}</p>
      <div className="flex my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 text-lg md:px-12 rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-black p-4 px-12 text-lg  rounded-lg mx-2">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
