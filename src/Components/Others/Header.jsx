import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Header = ({ data }) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }
  console.log(data)
  // console.log(data.firstName)
  return (
    <div>{
      data?.firstName ? (
        <header className='w-full flex justify-between items-end' >
          {console.log(data.firstName)}
          <h1 className='text-2xl font-medium'>Hey <br /> <span className='font-semibold text-3xl'>{data.firstName}👋</span></h1>
          <button onClick={logOutUser} className='bg-red-600 px-4 py-2 text-xl rounded-lg'>Log Out</button>
        </header >
      ) : (
        null
      )}</div>

  );
};

export default Header;