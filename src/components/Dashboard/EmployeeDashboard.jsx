import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList.jsx/TaskList'
import Footer from '../others/Footer'

const EmployeeDashboard = (props) => {

  return (
    <div className='bg-[#1c1c1c] h-full px-8 pb-11 '>
      
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard