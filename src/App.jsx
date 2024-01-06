import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Test2 from './pages/Test2'
import {Login, Profile} from './pages'
import {Layout, ZoomModal} from './components'
import image from './assets/img/1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {setImage, openModal} from './redux/features/zoomModal'


const App = () => {

  const {open, image} = useSelector(state => state.zoom)

  const dispatch = useDispatch()
  
  const handleOpenZoom = (state) => {
    dispatch(openModal(state))
  }


  return (
    <>
       {
        open && <ZoomModal open={open} setOpen={handleOpenZoom}  zoomImage={image}/>
       }

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index  element={<Test/>}/>
          <Route path='/test2'  element={<Test2/>}/>
          <Route path='/profile'  element={<Profile />}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}

export default App