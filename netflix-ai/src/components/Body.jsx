import React, { useEffect, useState } from 'react';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from './Browse';
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../slice/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Track if this is the first load

  // Define your routes
  const appRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/browse', element: <Browse /> },
    { path: '/login', element: <Login /> }
  ]);

  useEffect(() => {
    // Set persistence to keep user signed in across sessions
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
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
            setIsFirstLoad(false); // Set flag to false after initial load
          } else {
            // User is signed out
            dispatch(removeUser()); // Clear user data from Redux store
            console.log("User is signed out or data already loaded on refresh");
            // Optionally navigate to login
            // navigate("/"); // Uncomment if you need navigation
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, [dispatch]); // Make sure to add dispatch as a dependency

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
