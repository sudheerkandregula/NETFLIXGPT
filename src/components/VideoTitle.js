import React from 'react'

const VideoTitle = ({title,overview}) => {
  
  return (
    <div className='pt-36 px-12 absolute z-20 text-white mt-40 left-10'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-md w-2/4'>{overview}</p>
      <div>
        <button className='z-30 bg-white border-white text-black p-4 px-12 mx-2 text-lg cursor-pointer rounded-lg hover:bg-black/20'>⏵Play</button>
        <button className='bg-transparent border border-white text-white p-4 px-8 mx-2 text-lg cursor-pointer rounded-lg'>More Info</button>
      </div>
    </div>
  )
};

export default VideoTitle;
