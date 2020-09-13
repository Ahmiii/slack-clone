import React, { useState, useEffect } from "react";
import SideBarHeader from "../components/Sidebar/SideBarHeader/SidebarHeader";
import SideBarOption from "../components/Sidebar/SideBarOption/SideBarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DarftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/Bookmark";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../config/firebase";
import "./SideBar.css";

const Sidebar = () => {
  const [Channals, setChannals] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapShot) =>
      setChannals(
        snapShot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

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
      <hr />
      <SideBarOption Icon={AddIcon} title="Add Channal" />

      {Channals.map((channal) => (
        <SideBarOption title={channal.name} />
      ))}
    </div>
  );
};
export default Sidebar;
