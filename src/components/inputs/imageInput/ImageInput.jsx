import React from "react";
import "./ImageInput.css";
import { FaCamera } from "react-icons/fa";

import img from "../../../assets/img/1.jpg";
import axios from "axios";

const ImageInput = ({ styleInput , url, setImageValue, imageValue}) => {
  const [preview, setPreview] = React.useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // setImageValue(e.target.)

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }

    // try {
    //   const formdata = new FormData();
    //   formdata.append('image', imageValue)
    //   // const response = await axios.post(url, formdata)
    // } catch (error) {
    //   console.log(error);
    // }


  };

  return (
    <div className="inputImage" title="Change Image">
      {/* <h4>Avatar</h4> */}
      <div className={`${styleInput} inputImage-img`}>
        {preview ? (
          <img src={preview} alt="Preview" className="preview-img" />
        ) : (
          <img src={img} alt="image"  />
        )}
        <div className="inputImage-img-camera" title="Change Image">
          <FaCamera />
        </div>

        <input type="file" onChange={handleFileChange} accept="image/*" />
      </div>
    </div>
  );
};

export default ImageInput;
