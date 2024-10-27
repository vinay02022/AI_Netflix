import React, { useEffect, useState } from 'react';
import Login from './Login';
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Browse from './Browse';
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../slice/userSlice';

const Body = () => {
  const dispatch=useDispatch();
  // const navigate=useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Track if this is the first load
  const appRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/browse', element: <Browse /> },
    { path: '/login', element: <Login /> }
  ]);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence) // Keeps user signed in across sessions
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("Mai_User", user);
            const uid = user.uid;
            // console.log("id", uid);
            dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName}));
            
            setIsFirstLoad(false); // Set flag to false after initial load
          } else {
            dispatch(removeUser()); 
            console.log("User is signed out or data already loaded on refresh");
            // navigate("/");
          }
        })
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
