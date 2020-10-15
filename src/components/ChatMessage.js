import React from "react";

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  // to determine if the message on firebase is a send or recieved message
  // by comparing ids of the message to the current user
  const messageClass = uid === props.auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={"message ${messageClass}"}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  );
}
