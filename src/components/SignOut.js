import { auth } from "firebase";
import React from "react";

export default function SignOut(props) {
    // this will trigger the signout method to firebase
  return (
    props.auth.currentUser && <button onClick={() => props.auth.signOut()}>Sign Out</button>
  );
}
