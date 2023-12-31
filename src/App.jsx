import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Test2 from './pages/Test2'
import {Login} from './pages'
import {Layout} from './components'


const App = () => {
  return (
    <>
       
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index  element={<Test/>}/>
          <Route path='/test2'  element={<Test2/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}

export default App