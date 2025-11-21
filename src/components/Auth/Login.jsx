import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  // console.log(handleLogin)


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
      e.preventDefault();
      handleLogin(email,password)
      setEmail('');
      setPassword('');
      
  }
  return (
    <div className='relative w-screen h-screen  flex items-center justify-center'>
      <div className=" relative border-2 border-emerald-600 px-15 py-26 rounded-4xl ">
              <h1 className='absolute  right-[20%] top-[4vh] text-4xl uppercase 
              !text-emerald-400 font-bold '>Registration</h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center mt-14 gap-4'>
          
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='text-xl outline-none border-2 border-emerald-600 rounded-2xl text-start px-12 py-3 placeholder:text-white/80 ' type="email" placeholder='Enter your email...'  />

          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className=' text-xl outline-none  border-2 border-emerald-600 rounded-2xl text-start px-12 py-3 placeholder:text-white/80 ' type="password" placeholder='Enter your password... ' />

          <button className='font-semibold text-xl hover:bg-emerald-900 cursor-pointer   border-none bg-emerald-600 px-14 py-4 mt-4 rounded-2xl transition-all ease-in-out duration-100 uppercase'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login