import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import "./SidebarHeader.css";

const SidebarHeader = () => {
  return (
    <div className="sidebar__header">
      <div className="sidebar__info">
        <h2>Geeks of Kolachi</h2>
        <h3>
          <FiberManualRecordIcon />
          Ahmed Faraz
        </h3>
      </div>
      <CreateIcon />
    </div>
  );
};

export default SidebarHeader;
