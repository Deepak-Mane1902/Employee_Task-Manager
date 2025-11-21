import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    // console.log(props)
  return (
    <div className='h-screen w-full px-10 mb-40 '>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
      
    </div>
  )
}

export default AdminDashboard