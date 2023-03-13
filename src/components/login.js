import * as React from "react";
import { useState } from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
// import Link from "@mui/joy/Link";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { CircularProgress } from "@mui/material";
function ModeToggle() {
  //   const { mode, setMode } = useColorScheme();
  //   const [mounted, setMounted] = React.useState(false);
  // necessary for server-side rendering
  // because mode is undefined on the server
  // React.useEffect(() => {
  //   setMounted(true);
  // }, []);
  //   if (!mounted) {
  //     return null;
  //   }
  //   return (
  //     <Button
  //       variant="outlined"
  //       onClick={() => {
  //         setMode(mode === 'light' ? 'dark' : 'light');
  //       }}
  //     >
  //       {mode === 'light' ? 'Turn dark' : 'Turn light'}
  //     </Button>
  //   );
}
export default function Login(props) {
  const [error, seterror] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [loginBtnStatus, setloginBtnStatus] = useState(
  //   localStorage.getItem("loginStatus")
  // );

  // const auth = getAuth();
  // console.log("props.lgs=", props.lgs);
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // let u = auth.currentUser;
        // ...
        props.getloginbtnstatus(true);

        localStorage.setItem("user", JSON.stringify(user));
        props.dismissLoginAfterSignin(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found")
          seterror("*User not found, please try again");
        // console.log(errorCode);
        props.getloginbtnstatus(false);
      });
  };
  //logout function
  // const signout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       console.log('user is siged out successfully')
  //       setloginBtnStatus(false);
  //       localStorage.setItem('loginStatus',false)
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log('user signout unsuccesfull')
  //     });
  // };
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("user is siged out successfully");
        // setloginBtnStatus(false);
        localStorage.setItem("loginStatus", false);
        props.getloginbtnstatus(false);
      })
      .catch((error) => {
        // An error happened.
        // console.log("user signout unsuccesfull");
      });
  };

  //auth status check
  //returns uid if signed in
  const getid = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // setloginBtnStatus(true);
        // console.log("uid is ", uid);
        // console.log("user is logged in");
        return true;
        // ...
      } else {
        // User is signed out
        // setloginBtnStatus(false);
        // console.log("user is signed out");
        return false;
        // ...
      }
    });
  };

  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />

        {console.log("props.lgs=", props.lgs) && props.lgs === true ? (
          <div className="flex flex-col">
            <h1>you are logged in</h1>
            <button onClick={signout}>logout</button>
          </div>
        ) : (
          <Sheet
            sx={{
              width: 300,
              mx: "auto", // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            
            <div>
            <CircularProgress value={0} className="self-center justify-center"/>

              <p className="text-grana">{error}</p>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="password"
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
              />
            </FormControl>

            <Button sx={{ mt: 1 /* margin top */ }} onClick={login}>
              Log in
            </Button>
            <Typography
              endDecorator={
                <Link
                  to="/signup"
                  onClick={() => {
                    props.getsignupstateforlogin(false);
                    props.handlelogin(false);
                  }}
                >
                  sign up
                </Link>
              }
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
        )}
      </main>
    </CssVarsProvider>
  );
}
