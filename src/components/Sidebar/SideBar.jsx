import React from "react";
import SideBarHeader from "./SideBarHeader/SidebarHeader";
import SideBarOption from "./SideBarOption/SideBarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DarftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/Bookmark";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideBarHeader />
      <SideBarOption Icon={InsertCommentIcon} title="thread" />
      <SideBarOption title="general" />
      <SideBarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SideBarOption Icon={DarftsIcon} title="Saved items" />
      <SideBarOption Icon={BookmarkBorderIcon} title="Channal browser" />
      <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={FileCopyIcon} title="File browser" />
      <SideBarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMoreIcon} title="Channal" />
    </div>
  );
};
export default Sidebar;
