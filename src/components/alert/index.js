import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Alert, Box } from "@mui/material"; 

const useStyles = makeStyles((theme) => ({
  alert: {
    "& .MuiPaper-root": {
      backgroundColor: "#5AC782",
      color: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
}));

export default function SimpleSnackbar(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles(props);
  const { openAlert, status, text } = props;
  useEffect(() => {
    if (openAlert) {
      setOpen(true);
    }
  }, [openAlert]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      className={classes.alert}
      sx={
        (status === "error" && {
          "& .MuiPaper-root": {
            backgroundColor: "#FF4B4B !important",
          },
        })
      }
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
          {text}
        </Alert>
      </Snackbar>
    </Box>
  );
}
