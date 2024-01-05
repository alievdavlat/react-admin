import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {FaBell, FaChevronDown, FaChevronUp} from 'react-icons/fa'
import women from '../../assets/img/women.jpg'
import { FaAffiliatetheme } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {changeTheme} from '../../redux/features/themeSlice'

const TopContainer = () => {

  const [openDropdown, setOpenDropdown] = React.useState(false)
  const [openThemeDropdown, setOpenThemeDropdown] = React.useState(false)

  const dispatch = useDispatch()


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


    // const themeTarget = document.querySelector('.main-container-top_profileCon-theme')
    // const themeDropwDown = document.querySelector('.main-container-top_profileCon-theme ul')
    // themeTarget.addEventListener("mouseenter", () => {
    //   themeDropwDown.style.display = "block";
    //   // setOpenThemeDropdown(true)
    // });

    // themeTarget.addEventListener("mouseleave", () => {
    //   themeDropwDown.style.display = "none";
    //   // setOpenThemeDropdown(false)
    // });


  }, []);


  const setTheme = (name) => {
      dispatch(changeTheme(name))
  }
  

  return (
    <div className='main-container-top'>
      
      <div className="main-container-top_inputBox">
      <input type="text" placeholder='Search item, collections' />
      
      <i>
        <BiSearchAlt/>
      </i>
      </div>

      <div className="main-container-top_profileCon">
         
          <div className='main-container-top_profileCon-theme' onClick={() => setOpenThemeDropdown(!openThemeDropdown)}>
          <FaAffiliatetheme  size={21} />

           {
            openThemeDropdown && 
            <ul>
            <li onClick={() => setTheme('dark')}>dark</li>
            <li onClick={() => setTheme('light')}>light</li>
            <li onClick={() => setTheme('blue')}>blue</li>
            <li onClick={() => setTheme('')}>system</li>
          </ul>
           }
          </div>


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