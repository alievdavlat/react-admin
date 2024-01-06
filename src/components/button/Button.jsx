import React from 'react'
import './button.css'

const Button = ({text, disabled, type}) => {
  return (
    <button disabled={disabled} type={type} className='button'>{text}</button>
  )
}

export default Button