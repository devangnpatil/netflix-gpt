import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen aspect-video absolute pt-[18%] px-[10%] text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-2xl py-6 w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-lg  rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-black p-4 px-12 text-lg  rounded-lg mx-2">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
