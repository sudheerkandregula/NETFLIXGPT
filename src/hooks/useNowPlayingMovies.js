import {api_options} from '../utils/constants';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies); //memoization

    const getNowPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    };

  useEffect(()=>{
    if(!nowPlayingMovies || nowPlayingMovies.length === 0) getNowPlayingMovies();
  },[]);
  
}
export default useNowPlayingMovies;