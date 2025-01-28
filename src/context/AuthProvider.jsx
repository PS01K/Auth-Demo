import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({});
const provider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function loginWithGoogle() {
    return signInWithPopup(auth, provider);
  }

  function logout() {
    return signOut(auth);
  }

  const authData = {
    currentUser,
    setCurrentUser,
    signUp,
    login,
    logout,
    loginWithGoogle,
  };

  return (
    <>
      <AuthContext.Provider value={authData}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
