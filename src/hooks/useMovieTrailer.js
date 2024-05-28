import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerVideo } from "../components/utils/movieSlice";
import { API_OPTIONS } from "../components/utils/Constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovie);
  const getMovieVideo = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const response = await data.json();
    const filterData = response.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : response.results[0];
    dispatch(addtrailerVideo(trailer));
  };

  useEffect(() => {
    !nowPlayingMovie && getMovieVideo(movieId);
  }, []);
};

export default useMovieTrailer;
