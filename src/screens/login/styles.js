import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
  sideBanner: {
    height: "100vh",
    boxShadow: "none !important",
    backgroundColor: theme.palette.primary.light + " !important",
    padding: "32px 36px",
    // [theme.breakpoints.down("md")]:{
    //     padding: "12px 36px",
    // }
  },
  bannerImage: {
    position: "absolute",
    bottom: "40px",
    left: "60px",
    borderRadius: "10px",
    width: "300px",
  },
  signInCard: {
    [theme.breakpoints.up("md")]: {
      padding: "32px 36px",
    },
    padding: "22px 18px",
    background: theme.palette.background.white,
    width: "306px",
    height: "368px",
    borderRadius: "16px",
    border: 0,
    boxShadow: "0px 8px 24px #0000001F",
    margin: "auto",
    marginTop:"20vh",
    zIndex: 10,
  },
  signTitle: {
    font: "normal normal 800 24px/32px NunitoSans-ExtraBold",
    letterSpacing: "0.14px",
    color: theme.palette.primary.dark,
    margin: 0,
  },
  inputBar: {
    marginTop: "27px",
  },
  forgetPassword: {
    // textAlign: "right !important",
    color: theme.palette.secondary.dark,
    marginTop: "5px",
    marginBottom: "20px",
    font: "normal normal 600 11px/16px NunitoSans-Regular",
    "& span": {
      color: theme.palette.primary.light,
    },
  },
  poweredBy: {
    textAlign: "center",
    color: theme.palette.secondary.dark,
    marginTop: "40px",
    marginBottom: "40px",
    font: "normal normal 600 12px/16px NunitoSans-Regular",
    "& span": {
      color: theme.palette.background.gray,
      font: "normal normal 500 10px/14px NunitoSans-Regular",
    },
  },
  loginBtn: {
    "&.MuiButton-root": {
      backgroundColor: theme.palette.primary.light,
      borderRadius: "12px",
      padding: "12px 0",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: theme.palette.primary.light,
      opacity: "0.80",
    },
    "&.MuiButton-text": {
      color: theme.palette.background.white,
    },
    "&.MuiButton-contained": {
      color: theme.palette.background.white,
      font: "normal normal bold 14px/19px NunitoSans-Bold",
      textTransform: "capitalize",
    },
  },
}));

export { useStyles };
