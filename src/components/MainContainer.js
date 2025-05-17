import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0) return null;

    const mainmovie = movies[0];

    const {original_title,overview,id} = mainmovie;

  return (
    <div className='md:relative md:pb-56 md:pt-0 pt-[25%] bg-black'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
};

export default MainContainer;
