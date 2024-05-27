import React from "react";
import { IMG_CDN } from "./utils/Constant";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-40 pr-4">
      <img alt="" src={`${IMG_CDN}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
