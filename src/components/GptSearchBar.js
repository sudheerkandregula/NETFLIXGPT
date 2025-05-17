import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { api_options, openrouter_key } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector(store => store.config.lang);
  const searchText = useRef();
  const [response, setResponse] = useState(""); // ✅ For storing response

  const searchMovieTMDB = async(movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', api_options);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearch = async () => {
    const prompt = `Act as a movie recommendation system and suggest movies for the query: ${searchText.current.value}. Only give me 5 movie names Do not number or bullet them. Separate them only by commas.`;

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openrouter_key}`, // Replace with your OpenRouter API key
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        }) 
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      const content = data.choices[0].message.content;
      const gptMovies = content.split(",");
      setResponse(content);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames : gptMovies , movieResults : tmdbResults}));

    } catch (error) {
      console.error('Fetch error:', error);
      setResponse('Something went wrong. Please try again.');
    }
  };
   
  return (
    <div className='pt-[35%] md:pt-[8%] flex flex-col items-center'>
      <form className='bg-black w-full md:w-1/2' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type='text'
          className="p-2 m-2 w-[68%] md:w-9/12 bg-white rounded-lg"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        />
        <button
          className='py-2 px-11 bg-red-600 text-white rounded-lg cursor-pointer'
          onClick={handleGptSearch}
        >
          {lang[langkey].search}
        </button>
      </form>
      {response && (
        <div className="text-white mt-4 bg-gray-800 p-4 rounded-lg w-1/2">
          <strong>Recommended Movies:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
