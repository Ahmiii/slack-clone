import React, { useState, useEffect } from "react";
import ChatroomHeader from "../../components/ChatRoom/ChatHeader/ChatHeader";
import { useParams } from "react-router-dom";
import db from "../../config/firebase";
import "./ChatRooms.css";
const ChatRooms = () => {
  const roomId = useParams();
  const [roomDetails, setroomDetails] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId.roomId)
        .onSnapshot((snapShot) => setroomDetails(snapShot.data()));
    }
  }, [roomId]);

  return (
    <div className="chat">
      <ChatroomHeader channelName={roomDetails} />
    </div>
  );
};

export default ChatRooms;
