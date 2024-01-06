import React from "react";
import avatar from "../../assets/img/1.jpg";
import { Button, ImageInput, InputRegular, InputRegular2 } from "../../components";

let styleInput = {
  width:'20rem',
}

const ProfileSettings = () => {
  return (
    <div className="profile-settings">
      
      <div className="input-box">
      <ImageInput styleInput={styleInput}/>
      </div>

      <div className="input-box">

      <InputRegular2
      key={"name"} 
      label={"Name"} 
      id={"name"} 
      type={"text"} 
      value={'Aliev'}
      />
       <InputRegular2 
      key={"phone"} 
      label={"Phone Number"} 
      id={"phone"} 
      type={"text"} 
      value={'+998999331564'}
      />

      </div>
   
      <div className="input-box">
      <Button  text="Submit" disabled={false} type={'submit'}/>
      </div>
    </div>
  );
};

export default ProfileSettings;
