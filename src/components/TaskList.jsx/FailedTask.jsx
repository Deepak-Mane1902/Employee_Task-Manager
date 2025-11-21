import React from 'react'

const FailedTask = ({data}) => {
  return (
          <div className="h-full w-[300px] bg-red-400 rounded-xl shrink-0">
          <div className=" flex justify-between px-6 py-4 items-center " >
               <h3 className='bg-red-500 px-6 py-1 rounded-lg'>{data.category}</h3>
               <h4 className='text-sm !text-black font-semibold '>{data.date}</h4>
          </div>
          <div className="px-8 flex flex-col gap-3">
          <h2 className='text-2xl font-bold leading-7'>{data.title}</h2>
          <p className='text-[2.5vh] !text-white/85'>{data.description} </p>
          </div>
          <div className='flex justify-between mx-8 mt-4 pb-4 '>
            {/* <button className='hover:bg-green-800 cursor-pointer transition-all ease-in-out duration-150 rounded-lg  bg-green-500 py-1 px-3 text-sm'>✅ Completed</button> */}
            <button className='hover:bg-red-800 cursor-pointer transition-all ease-in-out duration-150 rounded-lg  bg-red-500 py-2 px-3 text-sm'>❌ Failed Task</button>
          </div>
     </div>
  )
}

export default FailedTask