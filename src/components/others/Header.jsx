// Header.jsx
import React from 'react';

const Header = (props) => {
  const data = props?.data ?? {};

  // derive username instead of storing in state
  const username = data.name === 'Admin' ? 'Admin' : data.name ?? '';

  const logOutUser = () => {
    // remove the logged in user completely
    localStorage.removeItem('loggedInUser');
    props.changeUser('');
  };

  return (
    <div className='flex items-center justify-between py-4'>
      <h1 className='text-3xl'>
        Hello,
        <br />
        <span className='font-bold text-4xl'>{username}</span> 👋
      </h1>
      <button
        onClick={logOutUser}
        className='text-xl mt-6 bg-red-400 px-8 py-3 rounded-xl cursor-pointer hover:bg-red-500'
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
