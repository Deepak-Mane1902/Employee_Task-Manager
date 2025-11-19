import React from 'react'

const TaskListNumber = () => {
  return (
    <div className=' py-6 flex justify-between  gap-5 w-full '>
     <div className="p-10 w-[45%] bg-blue-400 rounded-xl">
          <h2 className='text-5xl font-semibold '>0</h2>
          <h3 className='text-2xl font-medium'>New Task</h3>
     </div>
     <div className="p-10 w-[45%] bg-green-400 rounded-xl">
          <h2 className='text-5xl font-semibold '>3</h2>
          <h3 className='text-2xl font-medium'>Completed</h3>
     </div>
     <div className="p-10 w-[45%] bg-yellow-300 rounded-xl">
          <h2 className='text-5xl font-semibold '>0</h2>
          <h3 className='text-2xl font-medium'>Accepted</h3>
     </div>
     <div className="p-10 w-[45%] bg-red-400 rounded-xl">
          <h2 className='text-5xl font-semibold '>1</h2>
          <h3 className='text-2xl font-medium'>Failed</h3>
     </div>
    </div>
  )
}

export default TaskListNumber