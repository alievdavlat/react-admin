import React from 'react'

const SidebarItemSimple = ({ icon, title, index, activeItem, setActiveItem }) => {
  return (
    <li
      className={`${index === activeItem && "active"}`}
      onClick={() => setActiveItem(index)}
      >

      <a href="#">{icon}</a>
      <span>{title}</span>
      <div className="perview_navItem">{title}</div>
    
    </li>
  );
}

export default SidebarItemSimple