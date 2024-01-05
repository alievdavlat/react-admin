import React from 'react'
import { Sidebar, TopContainer} from '../../components'
import { Outlet } from 'react-router-dom'
import '../container/container.css'
import { useSelector } from 'react-redux'


const Layout = () => {

  const {theme} = useSelector(state => state.theme)


  return (
    <div className={`App ${theme}`} id='App'>
       <Sidebar/>

    <div className='main-container'>
      <TopContainer/>
      <Outlet/>
    </div>

    </div>
  )
}

export default Layout