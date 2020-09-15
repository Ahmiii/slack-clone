import React from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader/ChatHeader";

const Chatroom = (props) => {
  console.log(props);
  const { roomId } = useParams();
  return (
    <div>
      <ChatHeader />
    </div>
  );
};
export default Chatroom;
