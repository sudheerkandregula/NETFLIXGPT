import {api_options} from '../utils/constants';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPopularMovies} from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', api_options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    console.log(json.results);
    };

  useEffect(()=>{
    if(!popularMovies || popularMovies.length === 0)  getPopularMovies();
  },[]);

}
export default usePopularMovies;