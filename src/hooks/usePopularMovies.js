import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../components/utils/movieSlice";
import { API_OPTIONS } from "../components/utils/Constant";
import { useSelector } from "react-redux";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
