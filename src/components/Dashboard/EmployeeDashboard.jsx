import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList.jsx/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen px-8 '>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard