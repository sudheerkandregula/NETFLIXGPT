import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm,setisSignInForm] = useState(true);

    const [errorMessage,seterrorMessage] = useState();


    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const msg = checkValidData(email.current.value,password.current.value);
        seterrorMessage(msg);

        if(msg) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL }));
                  }).catch((error) => {
                    seterrorMessage(error); 
                  });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+"-"+errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+"-"+errorMessage);
            });
        }

    }

  return (
    <div>
      <Header />
      <div className='absolute w-full h-screen overflow-x-hidden'>
        <img className='w-full h-screen object-cover sm:h-screen md:h-screen lg:h-screen' src= {BG_URL} alt="img"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute w-[90%] md:w-3/12 p-12 bg-black/80 my-80 md:my-36 mx-auto right-0 left-0'>
        <h1 className='font-bold text-2xl m-2 py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input  ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full text-white bg-gray-700 rounded-lg'/>}
        <input ref={email} type='text' placeholder='Email id' className='p-4 my-4 w-full text-white bg-gray-700'/>
        <input ref={password} type='password' placeholder='password' className='p-4 my-4 w-full text-white bg-gray-700'/>
        <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
        <button className='p-4 my-4 w-full h-14 text-white bg-red-700 rounded-lg cursor-pointer' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to netflix? signup now" : "Already Registered, please Sign In"}</p>
      </form>
    </div>
  )
}

export default Login;
