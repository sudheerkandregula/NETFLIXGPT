import React, { useState } from 'react'
import Header from './Header';

const Login = () => {


    const [isSignInForm,setisSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg' alt="img"/>
      </div>
      <form className='absolute w-3/12 p-12 bg-black/80 my-36 mx-auto right-0 left-0'>
        <h1 className='font-bold text-2xl m-2 py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full text-white bg-gray-700 rounded-lg'/>}
        <input type='text' placeholder='Email id' className='p-4 my-4 w-full text-white bg-gray-700 rounded-lg'/>
        <input type='password' placeholder='password' className='p-4 my-4 w-full text-white bg-gray-700 rounded-lg'/>
        <button className='p-4 my-4 w-full h-14 text-white bg-red-700 rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to netflix? signup now" : "Already Registered, please Sign In"}</p>
      </form>
    </div>
  )
}

export default Login;
