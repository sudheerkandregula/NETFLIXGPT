import {api_options} from '../utils/constants';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addUpcomingMovies} from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
  {
    const getUpcomingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', api_options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    console.log(json.results);
    };

  useEffect(()=>{
    getUpcomingMovies();
  },[]);
  }
}
export default useUpcomingMovies;