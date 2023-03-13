import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";

import Typography from "@mui/joy/Typography";
import Login from "./login";

export default function Modalcomponent(props) {
  const [dismissafter, setdismissafter] = React.useState(false)
  const dismissLoginAfterSignin=(get)=>{

  }
    const getsignupstateforlogin=(get)=>{
        setdismissafter(get);
        

    }
  const [open, setOpen] = React.useState();

  return (
    <React.Fragment>
      <Modal
        open={open || props.op||dismissafter}
        onClose={() => {
          setOpen(false);
          props.handlelogin(false);
        }}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Login getsignupstateforlogin={getsignupstateforlogin} handlelogin={props.handlelogin} getloginbtnstatus={props.getloginbtnstatus} lgs={props.lgs} dismissLoginAfterSignin={dismissLoginAfterSignin}/>
{/*getting loginBtnStatus function as props from app.js to login popup window */}
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
