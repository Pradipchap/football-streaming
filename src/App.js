import "./App.css";
import First from "./components/first";
import Ucl from "./components/ucl";
import Navbar from "./components/navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import React from "react";
import { auth } from "./config";
// import Login from "./components/login";
import { onAuthStateChanged } from "firebase/auth";
import Admin from "./components/admin";
import Protected from "./components/protected";
import Video from "./components/video";
import Nest2 from "./components/n";

function App() {
  const [profilename, setprofilename] = useState("");
  const getid = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uemail = user.email;
        setprofilename(uemail);
        // setloginBtnStatus(true);
        // console.log("uid is ", uemail);

        setlgs(true);
        // return true;
        // ...
      } else {
        // User is signed out
        // setloginBtnStatus(false);
        // console.log("user is signed out");
        // return false;
        setlgs(false);
        // ...
      }
    });
  };
  getid();
  //lgs=loginstatus
  const [lgs, setlgs] = useState(false);

  const getinfo = () => {
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      // setprofilename(displayName)
      var email = user.email;
      // setprofilename(email);
      // console.log(profilename);
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      // console.log(uid);
      // console.log(1);
    }
    // else console.log("user is null");
  };

  getinfo();
  const getloginbtnstatus = (get) => {
    setlgs(get);
  };

  //signout function

  const [menu, setmenu] = useState("closed");
  const menuclose = () => {
    menu === "closed" ? setmenu("opened") : setmenu("closed");
  };
  return (
    <>
      <Router>
        <Navbar
          menuclose={menuclose}
          menu={menu}
          getloginbtnstatus={getloginbtnstatus}
          lgs={lgs}
        />

        <Routes>
          <Route exact path="/" element={<First />} />

          <Route exact path="/signup" element={<Signup />} />

          <Route element={<Protected profilename={profilename} />}>
            <Route exact path="/admin" element={<Admin />} />
          </Route>
          <Route exact path="/ucl" element={<Ucl />}>
            <Route  index element={<Video />} />
            <Route exact path="n" element={<Nest2/>}/>
          </Route>

          {/* <Route exact path="/modal" element={<BasicModalDialog loginopen={loginopen}/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
