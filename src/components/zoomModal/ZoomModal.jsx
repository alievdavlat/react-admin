import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import './zoomModal.css'



const ZoomModal = ({ open, setOpen, zoomImage }) => {
  const [scale, setSecale] = React.useState(1);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const imgRef = useRef(null)

  

  const handleClose = (e) => {
    if (e.target.id === "zoomModal-bg") {
      setOpen(false);
    }
  };


  const hanldeZoomIn = () => {
      setSecale((scale) => scale + 0.1)
  }

  const hanldeZoomOut = () => {
    if (scale > 0.30000000000000016) {
      setSecale((scale) => scale - 0.1)
    }
  }

  useEffect(() => {
    const image = imgRef?.current
    let isDragging = false
    let prevPosition = {x:0 , y:0}

    const handleMouseDown = (e) => {
      isDragging = true
      prevPosition = {x:e?.clientX, y:e?.clientY}
    }

    const mouseMove = (e) => {
      if (!isDragging) {
        return
      }
      const deltaX = e?.clientX - prevPosition.x
      const deltaY = e?.clientY - prevPosition.y
      prevPosition = {x:e?.clientX, y:e?.clientY}

      setPosition((position) => ({
        x:position.x + deltaX,
        y:position.y + deltaY
      }))
    }

    const mouseUp = (e) => {
      isDragging = false
    }

    image?.addEventListener('mousedown', handleMouseDown)
    image?.addEventListener('mousemove', mouseMove)
    image?.addEventListener('mouseup', mouseUp)

    return () => {
      image?.removeEventListener('mousedown', handleMouseDown)
      image?.removeEventListener('mousemove', mouseMove)
      image?.removeEventListener('mouseup', mouseUp)   
    }

  }, [imgRef, scale])

  return (
    <div className="zoomModal-bg" id="zoomModal-bg" onClick={handleClose}>
      <div className="zoomModal" id="zoomModal">
        <span className="zoomModal-close" onClick={() => setOpen(false)}>
          <MdClose size={24} />
        </span>

        <div className="zoomModal-image_wrapper">
          <div className="zoomModal-image_wrapper_img">
            <img
              ref={imgRef}
              style={{
                cursor:'move',
                transform:`scale(${scale}) translate(${position.x}px, ${position.y}px)`,

              }}
              src={
                zoomImage  || ''
              }
              alt="image"
            />
          </div>

          
        </div>

        <div className="zoomModal_tools">
          <button onClick={hanldeZoomIn}>
            <FaSearchPlus />
          </button>

          <button onClick={hanldeZoomOut}>
          <FaSearchMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoomModal;
