import React from "react";
import "./App.css";
import Chatroom from "./components/Chatroom.js";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

// firebase SDK
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase Hooks
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // this hook will return an object with the user id and info but will be null if no
  // user is signed in
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>React SuperChat! ⚛️</h1>
        <SignOut auth={auth} />
      </header>
      <section>
        {/* checks to verify is user is signed in so that it can display the chat */}
        {user ? (
          <Chatroom firestore={firestore} auth={auth} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
