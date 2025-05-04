import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm,setisSignInForm] = useState(true);

    const [errorMessage,seterrorMessage] = useState();

    const Navigate = useNavigate();

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
                    Navigate("/browse");
                  }).catch((error) => {
                    seterrorMessage(error); 
                  });
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+"-"+errorMessage);
                // ..
            });
        }
        else{
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                Navigate("/browse");
                console.log(user);
                // ...
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
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg' alt="img"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12 bg-black/80 my-36 mx-auto right-0 left-0'>
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
