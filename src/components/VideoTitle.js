import React from 'react'

const VideoTitle = ({title,overview}) => {
  
  return (
    <div className='pt-39 px-6 md:px-12 absolute z-20 text-white mt-10 md:mt-30 left-10'>
      <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-md w-2/4'>{overview}</p>
      <div className='pt-5 md:pt-0'>
        <button className='z-30 bg-white border-white text-black p-4 px-12 mx-2 text-lg cursor-pointer rounded-lg hover:bg-gray-300'>⏵Play</button>
        <button className='bg-transparent border border-white text-white p-4 px-8 mx-2 text-lg cursor-pointer rounded-lg hover:text-gray-300'>More Info</button>
      </div>
    </div>
  )
};

export default VideoTitle;
