import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
 
  if (!movies?.length) {
    return <p>No movies available</p>; // ✅ Fallback if no movies
  }

  return (
    <div className='px-6'>
    <h1 className='text-white text-2xl py-4'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-hide'>
      <div className='flex'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} /> // ✅ Loop over all movies
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
