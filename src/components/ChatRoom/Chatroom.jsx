import React from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader/ChatHeader";
import "./Chatroom.css";

const Chatroom = (props) => {
  console.log(props);
  const { roomId } = useParams();
  return (
    <div className="chat">
      <ChatHeader />
    </div>
  );
};
export default Chatroom;
