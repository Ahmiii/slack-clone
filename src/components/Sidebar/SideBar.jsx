import React from "react";
import SideBarHeader from "./SideBarHeader/SidebarHeader";
import SideBarOption from "./SideBarOption/SideBarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideBarHeader />
      <SideBarOption Icon={InsertCommentIcon} title="thread" />
    </div>
  );
};
export default Sidebar;
