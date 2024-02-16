import React from 'react'
import { InputRegular2 } from '../components'


const Login = () => {
  return (

    <div className='login'>

    <form className='login-form'>
      <div className='login-form-title'>
          <h4>Login</h4>
      </div>

      <div className="input-box">
      <InputRegular2/>
      <InputRegular2/>
      </div>


    </form>

    </div>
  )
}

export default Login