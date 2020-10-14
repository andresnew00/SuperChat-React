import React from "react";
import "./App.css";
import Chatroom from "./components/Chatroom.js";
import SignIn from "./components/SignIn";

// firebase SDK
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase Hooks
import { useAuthState } from "react-firebase-hooks/auth";
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

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // this hook will return an object with the user id and info but will be null if no
  // user is signed in
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header className="App-header"></header>

      <section>
        {/* checks to verify is user is signed in so that it can display the chat */}
        {user ? <Chatroom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
