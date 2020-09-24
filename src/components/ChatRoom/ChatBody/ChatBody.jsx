import React from "react";
import "./ChatBody.css";

const ChatBody = (props) => {
  const { message, timestamp, user, userImage } = props;
  return (
    <div className="chat__body">
      <div className="chat__messages">
        <img src={userImage} loading="lazy" alt="faraz" />
        <div className="message__info">
          <h5>
            {user}{" "}
            <span className="message__timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h5>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
