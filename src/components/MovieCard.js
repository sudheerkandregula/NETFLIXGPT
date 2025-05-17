import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {

  if(!posterPath) return null;
  return (
    <div className='w-48 pr-4 transform transition duration-300 hover:scale-150 hover:z-10 hover:translate-y-[-10%] shadow-lg cursor-pointer'>
      <img alt="movie_card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
