import { useState } from "react";
import Header from "./Header";

 const Login = () => {
  const[isSignIn,setSignIn]=useState(true);
  const toggleSignup=()=>{
    setSignIn(!isSignIn)
  }
  return (
    <div>
      {/* <h2>Hello Wo</h2> */}
     <Header/>
     <div className="absolute">
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg' alt="Background" className=""/>
     </div>
     <form className="absolute mx-auto left-0 right-0 bg-black w-[30%] h-[95%] bg-opacity-80 p-12 my-36 rounded-lg">

     <h2 className="text-cyan-50  m-2 font-bold text-4xl mb-10">{!isSignIn ? "Sign Up":"Sign In"}</h2>
     {!isSignIn && <input type="text" id="name"  placeholder="Full Name" className="p-2 m-2 w-full h-14 rounded-sm placeholder-gray bg-transparent border"/>}

      <input type="email" id="emailId"  placeholder="Email or mobile number" className="text-cyan-50 p-2 m-2 w-full h-14 rounded-sm placeholder-gray bg-transparent border"/>
      <input type="password" id="pass"  placeholder="Password" className="p-2 m-2 w-full h-14 rounded-sm placeholder-gray bg-transparent border text-gray-100"/>
      <button className="p-2 m-2 bg-[rgb(229,9,20)] text-white text-center w-full my-4 rounded-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">{!isSignIn ? "Sign Up":"Sign In"}</button>
      <div className="flex justify-between mt-0">
      <label className="inline-flex items-center text-sm text-gray-300 mx-2">
        <input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"/>
        <span className="ml-1">Remember me</span>
      </label>      
      <a href="#" className="text-sm text-gray-400 hover:text-white ml-2">Need Help ?</a>
      </div>
      <p className="p-2 m-2 mt-10 text-gray-400 cursor-pointer" onClick={toggleSignup} > {isSignIn ?(
    <>
      New to Netflix?{''}
      <a className="font-semibold text-cyan-50 hover:text-fuchsia-300">
        Sign up now.
      </a>
    </>
  ):<p className="pl-0 ml-0 hover:font-bold hover:text-white">Already Registered ?  Sign In Now</p>}</p>
       </form>
    </div>
  );
};
export default Login;