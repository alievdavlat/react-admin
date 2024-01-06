import React from "react";
import "./sidebar.scss";
import logo from "../../assets/img/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import SidebarItemSimple from "./SidebarItemSimple";


const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState(1);
  const [isToggle, setIsToggle] = React.useState(false);
  const screenWidth = window.innerWidth;
  const [disTogg, setDisTogh] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      
      if (screenWidth < 430) {
        setIsToggle(false)
        setDisTogh(true)
      }
    });
  }, [screenWidth])

  return (
  <aside className={`menu ${isToggle && "menu-active"}`}>
      <img src={logo} alt="logo" />

      <button disabled={disTogg} className="menu-toggle" onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? (
          <FaAngleLeft size={15} fill="white" />
        ) : (
          <FaAngleRight size={15} fill="white" />
        )}
      </button>

      <ul className="menu-navigation" id="menu-navigation">
        <SidebarItemSimple
          icon={<FaDelicious />}
          index={1}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          title="Dashboard"
        />
        <SidebarItemSimple
          icon={<FaShoppingCart />}
          index={2}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          title="Cart"
        />
        <SidebarItemSimple
          icon={<FaWallet />}
          index={3}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          title="MarketPlace"
        />
        <SidebarItemSimple
          icon={<FaChartLine />}
          index={4}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          title="Statistics"
        />
        <SidebarItemSimple
          icon={<FaRegClock />}
          index={5}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          title="Timeline"
        />
      </ul>

      <ul className="menu-lastNavigation">
        <SidebarItemSimple
          icon={<FaCog />}
          index={6}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          title="Settings"
        />
        <SidebarItemSimple
          icon={<FaSignOutAlt />}
          index={7}
          activeItem={""}
          setActiveItem={setActiveItem}
          title="Log out"
        />
      </ul>
      
    </aside>
  );
};


export default Sidebar;
