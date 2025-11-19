import React, { useState } from 'react'

const Login = () => {

  const [isEmail, setEmail] = useState('')
  const [isPassword, setPassword] = useState('')

  const submitHandler=(e)=>{
      e.preventDefault();
      console.log("Submitted");
      console.log(isEmail);
      console.log(isPassword);

      setEmail('');
      setPassword('');
      
  }
  return (
    <div className='relative w-screen h-screen  flex items-center justify-center'>
      <h1 className='absolute left-[4vw] top-[4vh] text-4xl uppercase !text-emerald-800'>Login</h1>
      <div className=" border-2 border-emerald-600 px-20 py-20 rounded-4xl shadow-xl shadow-emerald-800">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center gap-2'>
          
          <input value={isEmail} onChange={(e)=>{setEmail(e.target.value)}} required className='text-xl outline-none border-2 border-emerald-600 rounded-full text-start px-12 py-4 placeholder:text-white/80 ' type="email" placeholder='Enter Your Email'  />

          <input value={isPassword} onChange={(e)=>{setPassword(e.target.value)}} required className=' text-xl outline-none  border-2 border-emerald-600 rounded-full text-start px-12 py-4 placeholder:text-white/80 ' type="password" placeholder='Enter Your password ' />

          <button className='font-bold text-xl hover:bg-emerald-900 cursor-pointer   border-none bg-emerald-600 px-14 py-4 mt-4 rounded-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login