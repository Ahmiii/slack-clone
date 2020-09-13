import React from "react";
import "./SideBarOption.css";

const SideBarOption = (props) => {
  const { Icon, title } = props;
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channal">
          <span className="sidebarOption__hashtag">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};
export default SideBarOption;
