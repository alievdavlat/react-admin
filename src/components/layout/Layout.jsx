import React from 'react'
import { Sidebar, TopContainer} from '../../components'
import { Outlet } from 'react-router-dom'
import '../container/container.css'


const Layout = () => {
  return (
    <div className='App' id='App'>
       <Sidebar/>

    <div className='main-container'>
      <TopContainer/>
      <Outlet/>
    </div>

    </div>
  )
}

export default Layout