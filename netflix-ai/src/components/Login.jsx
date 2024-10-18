import Header from "./Header";

 const Login = () => {
  return (
    <div>
      {/* <h2>Hello Wo</h2> */}
     <Header/>
     <div className="absolute">
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg' alt="Background" className=""/>
     </div>
     <form className="absolute mx-auto left-0 right-0 bg-black w-[30%] h-4/5 bg-opacity-70 p-12 my-36 rounded-lg">
     <h2 className="text-cyan-50  m-2 font-bold text-lg">Sign In</h2>
      <input type="email" id="emailId"  placeholder="Enter Your Email" className="p-2 m-2 w-full rounded-md"/>
      <input type="password" id="pass"  placeholder="Enter Your Password" className="p-2 m-2 w-full rounded-md"/>
      <button className="p-2 m-2 bg-red-600 text-white text-center w-full my-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">Sign In</button>
      <div className="flex justify-between mt-0">
      <label className="inline-flex items-center text-sm text-gray-300 mx-2">
        <input type="checkbox" class="form-checkbox h-4 w-4 text-red-600"/>
        <span className="ml-1">Remember me</span>
      </label>      
      <a href="#" className="text-sm text-gray-400 hover:text-white ml-2">Need Help ?</a>
      </div>
      <p className="p-2 m-2 mt-10 text-gray-400">New to NetFlix ? <a className="font-semibold text-cyan-50 hover:text-fuchsia-300" href="#">Sign up now.</a></p>
       </form>
    </div>
  );
};
export default Login;