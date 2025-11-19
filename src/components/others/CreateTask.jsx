import React from 'react'

const CreateTask = () => {
  return (
      <div>

      <form className='flex justify-between items-center bg-[#1c1c1c] px-10 pb-4 mt-2 rounded-lg'>

      <div className='left-admin py-4 flex gap-2 flex-col'>    

      <div className=''>
          <h3 className='text-xl'>Task Title</h3>
          <input id='adminInput'  type="text" placeholder='Make a UI Design' />
      </div>

        <div>
          <h3 className='text-xl'>Date</h3>
          <input id='adminInput'  type="date" />
        </div>

        <div>
          <h3 className='text-xl'>Assign To</h3>
          <input id='adminInput'  type="text" placeholder='employee, name' />
        </div>
          
        <div>
          <h3 className='text-xl'>Category</h3>
          <input  id='adminInput' type="text" placeholder='design, dev, etc...' />
        </div>


        </div>
      <div className='right'>

        <div className='ml-[-4vh]'>
          <h3 className='text-2xl pb-2 '>Description</h3>
          <textarea name="" id=""  className='px-10 pt-2 outline-none border  border-emerald-900 rounded-2xl' cols={49} rows={9}></textarea>
        </div>

          <button className='font-semibold px-47  py-4 bg-emerald-400 ml-[-4vh] rounded-xl mt-4 !hove:text-white/80 hover:bg-emerald-600 cursor-pointer transition-all ease-in-out duration-150'>Create Task</button>
      </div>

        </form>
      </div>
  )
}

export default CreateTask