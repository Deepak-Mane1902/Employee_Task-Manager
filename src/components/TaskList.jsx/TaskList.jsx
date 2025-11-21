import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
       <div id='tasklist' className='h-[45%] w-full overflow-x-auto  flex justify-start items-center gap-8 flex-nowrap'>
     {data.tasks.map((elem,idx)=>{
         if(elem.newTask){
              return <NewTask key={idx} data={elem} />
         }
          if(elem.active){
               return <AcceptTask key={idx} data={elem} />
          }
          if(elem.completed){
               return <CompleteTask key={idx} data={elem} />
          }
          if(elem.failed){
               return <FailedTask key={idx} data={elem} />
          }
     })}


    </div>
  )
}

export default TaskList