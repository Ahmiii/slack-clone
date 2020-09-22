import React, { useState } from "react";
import db from "../../../config/firebase";
import { useStateValue } from "../../../ContextAPI/StateProvider";
import firebase from "firebase";
import "./ChatInput.css";
function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const onChangeInput = (e) => {
    console.log(user);
    e.preventDefault();
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(channelId);
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={onChangeInput}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
