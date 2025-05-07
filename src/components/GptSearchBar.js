import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langkey = useSelector(store=> store.config.lang)

  return (
    <div className='pt-[8%] flex justify-center'>
      <form className='bg-black w-1/2'>
        <input type='text' className="p-2 m-2 w-10/12 bg-white rounded-lg" placeholder={lang[langkey].gptSearchPlaceHolder}/>
        <button className='py-2 px-7 bg-red-600 text-white rounded-lg cursor-pointer'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}
 
export default GptSearchBar;
