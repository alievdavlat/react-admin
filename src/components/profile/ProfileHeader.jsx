import React from "react";
import "./profile.scss";

import avatar from "../../assets/img/1.jpg";

const tabs = ["Details", "Settings"];

const ProfileHeader = ({setProfileTabs, activeTab, setActiveTab}) => {

  const onTabClick = (idx) => {
    setActiveTab(idx)
    setProfileTabs(idx)
  }

  return (
    <div className="profile-header">
      <div className="profile-header-top">
        <div className="profile-header-top_image">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="profile-header-top-info">
          <h4>
            aliev
            <span>admin</span>
          </h4>
          <p>+998999331564</p>
        </div>
      </div>

      <ul className="profile-header-bottom">
        {tabs.map((item, index) => (
          <li
            key={item}
            className={`${index == activeTab && "active"}`}
            onClick={() => onTabClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileHeader;
