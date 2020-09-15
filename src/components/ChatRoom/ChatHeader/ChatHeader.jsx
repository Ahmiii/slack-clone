import React from "react";
import "./ChatHeader.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
const ChatHeader = (props) => {
  const { channelName } = props;
  return (
    <div className="chat__header">
      <div className="chat__headerLeft">
        <h4 className="chat__channelName">
          <strong>#{channelName?.name}</strong>
          <StarBorderOutlinedIcon />
        </h4>
      </div>
      <div className="chat__headerRight">
        <p>
          <InfoOutlinedIcon />
          Details
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
