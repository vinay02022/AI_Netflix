import React from 'react'

const Header = (props) => {
  const{isSignIn}=props;
  console.log("isSignIn",isSignIn);
  const handleLogout=()=>{
    
  }

  return     <>
  {!isSignIn ? (
    <div className='bg-gradient-to-b from-black absolute z-10'>
      <img 
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        className='w-44' 
        alt="Netflix Logo" 
      />
    </div>
  ) : (
    <div className='bg-gradient-to-b flex justify-between  from-black absolute z-10'>
      <img 
        src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' 
        className='w-44' 
        alt="Netflix Logo" 
      />
      <button onClick={handleLogout}>Sign out</button>
    </div>
  )}
</>
}

export default Header;
