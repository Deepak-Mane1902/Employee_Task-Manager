import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='relative  py-6 flex justify-between  gap-1 md:gap-4 w-full overflow-x-hidden'>
     <div className="p-10 text-center w-[24%] md:w-[45%] bg-blue-400 rounded-xl">
          <h2 className='text-5xl font-semibold '>{data.taskCounts.newTask}</h2>
          <h3 className=' text-sm  leading-5  md:text-2xl font-medium'>New Task</h3>
     </div>
     <div className="p-10 text-center w-[24%] md:w-[45%] bg-green-400 rounded-xl">
          <h2 className='text-5xl font-semibold '>{data.taskCounts.completed}</h2>
          <h3 className=' text-sm  ml-[-4vw] leading-5  md:text-2xl font-medium'>Completed Task</h3>
     </div>
     <div className="p-10 text-center w-[24%] md:w-[45%] bg-yellow-300 rounded-xl">
          <h2 className='text-5xl font-semibold !text-black '>{data.taskCounts.active}</h2>
          <h3 className=' text-sm ml-[-2vw]  leading-5  md:text-2xl font-medium !text-black'>Accepted Task</h3>
     </div>
     <div className="p-10 text-center w-[24%] md:w-[45%] bg-red-400 rounded-xl">
          <h2 className='text-5xl font-semibold '>{data.taskCounts.failed}</h2>
          <h3 className=' text-sm  leading-5  md:text-2xl font-medium'>Failed Task</h3>
     </div>
    </div>
  )
}

export default TaskListNumber