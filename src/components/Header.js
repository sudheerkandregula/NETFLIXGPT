import React from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, UserIcon } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      Navigate("/");
    }).catch((error) => {
      Navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        Navigate("/browse");
      } 
      else {
        dispatch(removeUser());
        Navigate("/");
      }
    });
    return () => unsubscribe();
  },[]);


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt ="logo"/>
    {user && <div className='flex p-2'>
      <img 
      className='w-12 h-12'
      alt="usericon" 
      src={UserIcon}/>
      <button onClick={handleSignOut} className='text-white p-2 cursor-pointer font-bold'>SignOut</button>
    </div>}
    </div>
  )
}

export default Header;
