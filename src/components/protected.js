import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
export default function Protected(props) {
  const [username, setusername] = useState("");
  const getid = () => {
    onAuthStateChanged(auth,  (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const em=user.email
        setusername(em);
        // console.log(username)
        // setloginBtnStatus(true);
      } else {
        // console.log("user is signed out");
        setusername("user not found");
      }
    });
  };

  // useEffect(() => {
    getid();
    // console.log('profile name protected',props.profilename)
  // }, []);

  return (


    props.profilename === "pradipcpgn@gmail.com" ?<Outlet />: <Navigate to="/" />  
  );
}
