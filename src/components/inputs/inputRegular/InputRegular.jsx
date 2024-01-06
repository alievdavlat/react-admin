import React from "react";
import "./inputRegular.css";

const InputRegular = ({
  placeholder,
  label,
  value,
  onchange,
  id,
  type,
  required,
}) => {
  /*

<InputRegular
        placeholder="username..."
        label="username"
        value={name}
        onchange={(e) => setname(e.target.value)}
        id="username"
        required={true}
        type={'text'}
      />


*/
  return (
    
      <div className="input-main">
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
    
  );
};

export default InputRegular;
