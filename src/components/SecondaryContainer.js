import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const SecondaryContainer = () => {
  useNowPlayingMovies(); // ✅ Must call the hook here

  const movies = useSelector((store) => store.movies);


  if (!movies?.nowPlayingMovies?.length) {
    return <p>Loading movies...</p>; // ✅ Fallback UI
  }

  return (
    <div className="bg-black">
      <div className='mt-85 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.trendingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
