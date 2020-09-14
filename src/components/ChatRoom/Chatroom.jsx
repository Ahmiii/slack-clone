import React from "react";
import { useParams } from "react-router-dom";
import "./Chatroom.css";

const Chatroom = (props) => {
  console.log(props);
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h1>you are in {roomId} room</h1>
    </div>
  );
};
export default Chatroom;
