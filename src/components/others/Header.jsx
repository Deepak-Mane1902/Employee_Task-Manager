import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between  py-4'>
    <h1 className='text-3xl'>Hello,<br /><span className='font-bold text-4xl'> Deepak</span> 👋</h1>
    <button className='text-xl mt-6 bg-red-400 px-8 py-3 rounded-xl cursor-pointer hover:bg-red-500'>Log out</button>
    </div>
  )
}

export default Header