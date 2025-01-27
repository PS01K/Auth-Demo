import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return  signInWithEmailAndPassword(auth, email, password);
  }

  const authData = {
    currentUser,
    setCurrentUser,
    signUp,
    login,
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