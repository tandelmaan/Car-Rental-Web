import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  reload,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();
const demoUserStorageKey = "rentwheels-demo-user";

const getDemoUser = () => {
  const email = localStorage.getItem(demoUserStorageKey);

  if (!email) return null;

  return {
    email,
    displayName: email.split("@")[0],
    photoURL: "/user.png",
  };
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getDemoUser);
  const [userLoading, setUserLoading] = useState(true);

  const createUG = () => {
    localStorage.removeItem(demoUserStorageKey);
    setUserLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const createUEP = (email, password) => {
    localStorage.removeItem(demoUserStorageKey);
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (updatedObj) => {
    setUserLoading(true);

    return updateProfile(auth.currentUser, updatedObj)
      .then(() => {
        return reload(auth.currentUser);
      })
      .then(() => {
        setUser(auth.currentUser);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const loginUEP = (email) => {
    const demoUser = {
      email,
      displayName: email.split("@")[0],
      photoURL: "/user.png",
    };

    localStorage.setItem(demoUserStorageKey, email);
    setUser(demoUser);
    setUserLoading(false);

    return Promise.resolve({ user: demoUser });
  };

  const logout = () => {
    setUserLoading(true);
    localStorage.removeItem(demoUserStorageKey);
    setUser(null);

    return signOut(auth).finally(() => {
      setUserLoading(false);
    });
  };

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(getDemoUser() || currentUser);
      setUserLoading(false);
    });
    return () => {
      userState();
    };
  }, []);
  const authInfo = {
    user,
    userLoading,
    setUserLoading,
    createUG,
    createUEP,
    updateUser,
    loginUEP,
    logout,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
