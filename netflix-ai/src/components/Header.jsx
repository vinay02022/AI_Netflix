import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../slice/userSlice';
import { onAuthStateChanged, setPersistence, browserLocalPersistence ,signOut} from "firebase/auth";
import { LOGO } from '../utils/constants';




const Header = ({checkIsSignin}) => {
  // console.log("singS1@gmail.com",checkIsSignin);
  
  const user = useSelector(store => store.user); // Get user data from Redux store
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isFirstLoad, setIsFirstLoad] = useState(true); // Track if this is the first load

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.warn("Success Signout");
      navigate('/');
    }).catch((error) => {
      console.warn("Error signing out:", error);
    });
  };
  useEffect(() => {
    // Set persistence to keep user signed in across session
        // Listen for authentication state changes
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            console.log("User Authenticated:", user);
            const uid = user.uid;
            // Dispatch user data to Redux store
            dispatch(addUser({ 
              uid: uid, 
              email: user.email, 
              displayName: user.displayName, 
              photoURL: user.photoURL // Make sure to include photoURL if you set it
            }));
            // setIsFirstLoad(false); // Set flag to false after initial load
            navigate("/browse");
          } else {
            // User is signed out
            dispatch(removeUser()); // Clear user data from Redux store
            console.log("User is signed out or data already loaded on refresh");

            // Optionally navigate to login
            navigate("/"); // Uncomment if you need navigation
          }
        });
  }, []); // Make sure to add dispatch as a dependency

  return (
    <div className='flex justify-end'>
      <div className='bg-gradient-to-b w-screen absolute from-black z-10 p-12'>
        <img
          src={LOGO}
          className='w-44'
          alt="Netflix Logo"
        />
      </div>
      {user &&  ( // Check if user data exists
        <div className='bg-gradient-to-b from-black absolute z-10 p-10 px-12'>
          <img
            src={auth.currentUser.photoURL}
            className='w-14 h-10 rounded-lg'
            alt="User Logo"
          />
          <h4 className='text-white'>{auth.currentUser.displayName}</h4>
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
