import React from 'react'
import './inputRegular2.css'

const InputRegular2 = ({
  placeholder,
  label,
  value,
  onchange,
  id,
  type,
  required
}) => {
  return (
    <div className="input-main2">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      autoComplete={false}
      required={required}
    />
  </div>
  )
}

export default InputRegular2