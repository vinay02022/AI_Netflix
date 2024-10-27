import React from 'react';

const Header = (props) => {
  const { isSignIn } = props;
  console.log("isSignIn", isSignIn);

  const handleLogout = () => {
    // Implement your logout logic here, e.g., clearing user data or redirecting
    console.log("User logged out");
  };

  return (
    <div className='flex justify-between'>
      {/* {!isSignIn ? ( */}
        <div className='bg-gradient-to-b w-screen  from-black'>
          <img 
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
            className='w-44' 
            alt="Netflix Logo" 
          />
        </div>
      {/* ) : ( */}
        <div className='bg-gradient-to-b  from-black'>
          <img 
            src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' 
            className='w-10 h-8' 
            alt="User Logo" 
          />
          <button 
            onClick={handleLogout} 
            className='text-white w-full text-center justify-center h-1/2 bg-red-600 rounded'
          >
            Sign out
          </button>
        </div>
      {/* )} */}
    </div >
  );
}

export default Header;
