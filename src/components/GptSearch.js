import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';


const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10 overflow-hidden w-full'>
        <img className='h-screen w-full object-cover' src={BG_URL} alt="img"/>
    </div>
    <div className=''>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  )
};

export default GptSearch;
