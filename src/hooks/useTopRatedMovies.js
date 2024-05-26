import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../components/utils/movieSlice";
import { API_OPTIONS } from "../components/utils/Constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
