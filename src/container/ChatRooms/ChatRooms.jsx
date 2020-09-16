import React, { useState, useEffect } from "react";
import ChatroomHeader from "../../components/ChatRoom/ChatHeader/ChatHeader";
import { useParams } from "react-router-dom";
import db from "../../config/firebase";
import ChatBody from "../../components/ChatRoom/ChatBody/ChatBody";
import "./ChatRooms.css";
const ChatRooms = () => {
  const roomId = useParams();
  const [roomDetails, setroomDetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId?.roomId)
        .onSnapshot((snapShot) => setroomDetails(snapShot.data()));
    }

    db.collection("rooms")
      .doc(roomId?.roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapShot) =>
        setroomMessages(snapShot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log({ roomMessages });
  return (
    <div className="chat">
      <ChatroomHeader channelName={roomDetails} />
      {roomMessages.map((message) => (
        <ChatBody
          message={message.message}
          timestamp={message.timestamp}
          user={message.user}
          userImage={message.usreImage}
        />
      ))}
    </div>
  );
};

export default ChatRooms;
