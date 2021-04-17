import React from "react";
import Avatar from "./Avatar/Avatar";
import Navigation from "./Navigation/Navigation";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  let s = "sidebar";
  return (
    <aside className={`${s} ${style.sidebar}`}>
      <div className={style.sidebarWrapper}>
        <Avatar />
        <ProfileInfo />
        <ProfileStatusContainer />
        <Navigation />
      </div>
    </aside>
  );
};

export default Sidebar;
