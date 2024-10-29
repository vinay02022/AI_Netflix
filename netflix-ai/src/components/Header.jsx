import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store => store.user); // Get user data from Redux store
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.warn("Success Signout");
      navigate('/');
    }).catch((error) => {
      console.warn("Error signing out:", error);
    });
  };

  return (
    <div className='flex justify-end'>
      <div className='bg-gradient-to-b w-screen absolute from-black z-10 p-12'>
        <img
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          className='w-44'
          alt="Netflix Logo"
        />
      </div>
      {user && user.displayName && ( // Check if user data exists
        <div className='bg-gradient-to-b from-black absolute z-10 p-10 px-12'>
          <img
            src={user.photoURL}
            className='w-14 h-10 rounded-lg'
            alt="User Logo"
          />
          {user.displayName}
          <button
            onClick={handleLogout}
            className='text-white w-full text-center justify-center h-1/2 rounded-full hover:scale-x-110 bg-red-600 rounded'
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
