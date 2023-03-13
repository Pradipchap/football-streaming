import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function Signup() {
  // function ModeToggle() {

  //     const { mode, setMode } = useColorScheme();
  //     const [mounted, setMounted] = React.useState(false);

  //     necessary for server-side rendering
  //     because mode is undefined on the server
  //     React.useEffect(() => {
  //       setMounted(true);
  //     }, []);
  //     if (!mounted) {
  //       return null;
  //     }

  //     return (
  //       <Button
  //         variant="outlined"
  //         onClick={() => {
  //           setMode(mode === "light" ? "dark" : "light");
  //         }}
  //       >
  //         {mode === "light" ? "Turn dark" : "Turn light"}
  //       </Button>
  //     );
  //   }
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [passwordnotmatch, setpasswordnotmatch] = useState("");
  const passwordnotmatched = () => {
    setpasswordnotmatch("Password not matched");
  };

  const createacc = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <CssVarsProvider>
      <main>
        {/* <ModeToggle /> */}
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
            <Typography level="h4" component="h1">
              <p className="text-grana text-xs">{passwordnotmatch}</p>
              <b>What's up?</b>
            </Typography>
            <Typography level="body2">
              Create a new account to continue.
            </Typography>
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
                console.log(password);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange={(event) => {
                setconpassword(event.target.value);
              }}
            />
          </FormControl>

          <Button
            sx={{ mt: 1 /* margin top */ }}
            onClick={password === conpassword ? createacc : passwordnotmatched}
          >
            Sign Up
          </Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
