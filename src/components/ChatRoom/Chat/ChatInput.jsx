import React from "react";
import "./ChatInput.css";
function ChatInput({ channelName, ChannelId }) {
  return (
    <div className="chatInput">
      <form>
        <input placeholder={`Message #${channelName}`} />
        <button type="submit" onClick={() => {}}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
