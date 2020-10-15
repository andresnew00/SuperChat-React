import React from "react";
import ChatMessage from "./ChatMessage";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  //configuration to init firebase
  apiKey: "AIzaSyBh5XuEWO9h_XYj-zI7I7nhMwoyRn79uJk",
  authDomain: "superchat-react-73401.firebaseapp.com",
  databaseURL: "https://superchat-react-73401.firebaseio.com",
  projectId: "superchat-react-73401",
  storageBucket: "superchat-react-73401.appspot.com",
  messagingSenderId: "858289740301",
  appId: "1:858289740301:web:036d54e4411d6de3ca9344",
});

export default function Chatroom(props) {
  // this will be the reference to the collection in firebase
  const messageRef = props.firestore.collection("messages");

  // we query the items by the time they were created and limit them to 25
  const query = messageRef.orderBy("createdAt").limit(25);

  // using the collection data hook we can see the messages in real time
  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div>
      {messages &&
        messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  );
}
