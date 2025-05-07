import {api_options} from '../utils/constants';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addTrendingMovies} from '../utils/moviesSlice';

const useTrendingMovies = () => {
    const dispatch = useDispatch();
  {
    const getTrendingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', api_options);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
    console.log(json.results);
    };

  useEffect(()=>{
    getTrendingMovies();
  },[]);
  }
}
export default useTrendingMovies;