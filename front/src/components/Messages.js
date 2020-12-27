import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Messages.css";

function Messages({ timestamp, user, message }) {
  return (
    <div className="messages">
      <Avatar src={user.photo} />
      <div className="messages__info">
        <h4>
          {user.displayName}
          <span className="messages__timestamp">
            {new Date(parseInt(timestamp)).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
