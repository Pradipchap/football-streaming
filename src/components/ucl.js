import React from "react";
import { query } from "firebase/firestore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// import Fixtures from "./fixtures";
// import Sportsnews from "./sportsnews";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { db } from "../config";

import { collection, getDocs, orderBy } from "firebase/firestore";
import Video from "./video";

// import Topic from "./n";

export default function Ucl() {
  // let match = useMatch();

  const leagueDeterminer = (get) => {
    const firstLetter = get[0];
    console.log(1);
    switch (firstLetter) {
      case "S":
        return "spanish-football-club";
      case "B":
        return "british-football-club";
      case "F":
        return "french-football-club";
      case "I":
        return "italian-football-club";
      case "G":
        return "german-football-club";

      default:
        break;
    }
    console.log("icon");
  };
  // let match = useRouteMatch();
  const [fetchedobj, setfetchedobj] = React.useState([]);

  // const as = [
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  //   { club1: "Fc Barcelona", club2: "Real Madrid", streamLink: "asdasd" },
  // ];

  React.useEffect(() => {
    const getdata = async () => {
      // const querySnapshot = await getDocs(collection(db, "streamlink"),);
      // console.log("data fetched");
      const querySnapshot = await getDocs(
        query(collection(db, "streamlink"), orderBy("timestamp",'desc'))
      );
      setfetchedobj(
        querySnapshot.docs.map((docs) => ({ ...docs.data(), id: docs.id }))
      );
    };

    getdata();
  }, []);
  //
  //signout a user
  // const signout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       console.log('user is siged out successfully')
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log('user signout unsuccesfull')
  //     });
  // };
  //auth status
  //get id of a signed in user if it is signed in
  const getid = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log("uid is ", uid);
        // console.log("user is logged in");
        // ...
      } else {
        // User is signed out
        // console.log("user is signed out");
        // ...
      }
    });
  };

  return (
    <div className="ucl mt-5 flex flex-col flex-wrap  gap-5 mx-4 justify-center">
      {/* <button onClick={getid}>Check status</button> */}
      {/* <button onClick={getdata}>signout</button> */}
      <Link to="video">Video</Link>
      <Link to="n">Nest2</Link>

      <div className="flex flex-col overflow-scroll bg-slate-50  py-[3rem] px-[2rem] rounded-2xl shadow-mg ">
        <h3 className="font-bold pb-5">Top Fixtures</h3>
        {fetchedobj.map((element) => {
          return (
            <div
              className="matches h-[4rem] my-1 w-[40rem] px-4 py-5 flex m-auto bg-white items-center text-black text-sm font-bold justify-center"
              key={element.id}
            >
              <div className="club1 flex">
                {element.club1.slice(1)}
                <img
                  className="w-[2em] h-[2em] max-tablet:w-[3em] max-tablet:h-[3em] mx-2"
                  src={`https://icons.iconarchive.com/icons/giannis-zographos/${leagueDeterminer(
                    element.club1
                  )}/128/${element.club1.slice(1)}-icon.png`}
                  width="128"
                  height="128"
                  alt="a"
                />
              </div>
              <div className="text-gray-400 flex flex-col justify-center items-center text-sm">
                <p>1:45</p>
                <ScheduleIcon fontSize="small" />
              </div>
              <div className="flex">
                <img
                  className="w-[2em] h-[2em] max-tablet:w-[3em] max-tablet:h-[3em] mx-2"
                  src={`https://icons.iconarchive.com/icons/giannis-zographos/${leagueDeterminer(
                    element.club2
                  )}/128/${element.club2.slice(1)}-icon.png`}
                  width="128"
                  height="128"
                  alt="a"
                />
                {element.club2.slice(1)}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="news w-[30rem] min-w-[20rem] h-[20rem] bg-red-500"></div>
       */}
      <Outlet />
    </div>
  );
}
