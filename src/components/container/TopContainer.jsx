import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {FaBell, FaChevronDown, FaChevronUp} from 'react-icons/fa'
import women from '../../assets/img/women.jpg'

const TopContainer = () => {

  const [openDropdown, setOpenDropdown] = React.useState(false)

  React.useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      menuContainer.style.transform = "translateX(0rem)";
      setOpenDropdown(true)
    });

    menuContainer.addEventListener("mouseleave", () => {
      menuContainer.style.transform = "translateX(15rem)";
      setOpenDropdown(false)
    });
  }, []);


  return (
    <div className='main-container-top'>
      
      <div className="main-container-top_inputBox">
      <input type="text" placeholder='Search item, collections' />
      
      <i>
        <BiSearchAlt/>
      </i>
      </div>

      <div className="main-container-top_profileCon">
          <i className="main-container-top_profileCon-icon">
            <FaBell/>
          </i>

          <div className="main-container-top_profileCon-image">
              <img src={women} alt="avatar" />
          </div>

          <p className="main-container-top_profileCon-name">
            Aliev Davlatbek
          </p>

          <i className="main-container-top_profileCon-menuChevron" id='menuChevron' onClick={() => setOpenDropdown(!openDropdown)}>
            {
              openDropdown 
              ? <FaChevronUp/>
              : <FaChevronDown/>
            
            }
          </i>  

          <div id='menuContainer' className={`main-container-top_profileCon-dropdown ${openDropdown && 'open-dropdown'}`}>
            <ul>
              <li>web design</li>
              <li>proggroming</li>
              <li>smm</li>
              <li>cyber security</li>
              <li>ui / ux design </li>
            </ul>
          </div>
      </div>

    </div>
  )
}

export default TopContainer