import React from "react";
import firebase from "firebase/app";

export default function SignIn(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }
  return <button onClick={signInWithGoogle}> Sign In With Google </button>;
}
