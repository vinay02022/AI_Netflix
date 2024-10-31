import { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";


const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  // const[names,setName]=useState(null);

  let email = useRef(null);
  let password = useRef(null);
  // yhi ref hi current.value wali cheezze lata h  , jaise email p ref lga to email.currect.value
  const name = useRef("");

  const toggleSignup = () => {

    setSignIn(!isSignIn)
  }

  const handleSignIn = () => {
    // console.log("Entery_handleSignIn");

    const error = validateData(email.current.value, password.current.value)
    setErrorMessage(error)
    if (error) return;
    //SignUp-Logic 
    if (!isSignIn) {

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("userUperInsideCreateUserLoign.jsx", user);
          // {console.log("HAHHAA",user)}
          const userName = name.current.value; // This gets the latest name input
          // const{uid,displayName,email,photoURL}=auth.currentUser;
          console.log("auth.currentUser",auth.currentUser);
          
          await updateProfile(user, {
            displayName: userName,
            photoURL: "https://avatars.githubusercontent.com/u/51539107?v=4&size=64",
          })
            .then(() => {
              // dispatch(
              //   addUser({
              //     uid: user.uid, 
              //     email: user.email,
              //     displayName: userName,
              //     photoURL: "https://avatars.githubusercontent.com/u/51539107?v=4&size=64",
              //   })


              // );
              console.log("User Name:", userName)
            })


          setSignIn(true)
          email.current.value = "";
          password.current.value = "";



        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage)
          // ..
        });


    }
    else {
      //signIn-Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("user", user);
          // setSignIn(true)//abhi k liye 

          dispatch(addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: "https://avatars.githubusercontent.com/u/51539107?v=4&size=64",
          }));
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage)
        });
    }


  }
  return (
    <div className="overflow-x-hidden">
      {/* <h2>Hello Wo</h2> */}
      <Header isSignIn={isSignIn} />
      {/* /onSignOut={() => setUser(null) */}
      <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg' alt="Background" />
      </div>
      <form className="absolute mx-auto left-0 right-0 bg-black w-[30%] h-[95%] bg-opacity-80 p-12 my-36 rounded-lg" onSubmit={(e) => {
        // console.log("Hello");
        e.preventDefault();
        handleSignIn();


      }}>

        <h2 className="text-cyan-50  m-2 font-bold text-4xl mb-10">{!isSignIn ? "Sign Up" : "Sign In"}</h2>
        {!isSignIn && <input type="text" ref={name} id="name" placeholder="Full Name" className="p-2 m-2 w-full h-14 rounded-sm text-white bg-transparent border" />}

        <input ref={email} type="email" id="emailId" placeholder="Email or mobile number" className="text-cyan-50 p-2 m-2 w-full h-14 rounded-sm text-white bg-transparent border" />
        <input ref={password} type="password" id="pass" placeholder="Password" className="p-2 m-2 w-full h-14 rounded-sm text-white bg-transparent border text-gray-100" />
        <button className="p-2 m-2 bg-[rgb(229,9,20)] text-white text-center w-full my-4 rounded-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">{!isSignIn ? "Sign Up" : "Sign In"}</button>
        <div className="flex justify-between mt-0">
          <label className="inline-flex items-center text-sm text-gray-300 mx-2">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-red-600" />
            <span className="ml-1">Remember me</span>
          </label>
          <a href="#" className="text-sm text-gray-400 hover:text-white ml-2">Need Help ?</a>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <p className="p-2 m-2 mt-10 text-gray-400 cursor-pointer" onClick={toggleSignup} > {isSignIn ? (
          <>
            New to Netflix?{''}
            <a className="font-semibold text-cyan-50 hover:text-fuchsia-300" onClick={toggleSignup}>
              Sign up now.
            </a>
          </>
        ) : <p className="pl-0 ml-0 hover:font-bold hover:text-white" onClick={toggleSignup}>Already Registered ?  Sign In Now</p>}</p>
      </form>
    </div>
  );
};
export default Login;