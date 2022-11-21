import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top:0,
    height: "54px",
    width: "100vw",
    backgroundColor: theme.palette.background.dark,
    padding: "10px 18px",
    boxSizing: "Border-Box",
    zIndex: "1000",
  },
  
  siteName: {
    display: "inline-block",
    color: theme.palette.background.white,
    paddingLeft: "20px",
    paddingTop: "5px",
    paddingBottom: "6 px",
    marginTop: "-10px",
    font: "normal normal 600 23px/14px NunitoSans-Bold !important",
    border: 0, 
    cursor: "pointer",
  },
  userName: {
    font: "normal normal bold 12px/16px NunitoSans-SemiBold",
    margin: "0",
    color: theme.palette.background.white,
    padding: "0 10px",
  },
  role: {
    font: "normal normal bold 10px/16px NunitoSans-SemiBold",
    margin: "0",
    color: theme.palette.text.light,
    padding: "0 10px",
  },
  dropDown: {
    margin: 0,
    marginLeft: "7px",
    color: theme.palette.background.white,
    fontSize: "12px",
    transform: "rotate(90deg)",
  },
  profileInfo: {
    minWidth: "320px",
    maxWidth: "420px",
  },
  roleViewer: {
    backgroundColor: "#FEEAEA",
    color: "#F17360 !important",
    padding: "1px 8px",
    borderRadius: "4px",
    width:"100px",
    margin:"6px 0 !important"
  },
  roleBox:{
    padding:"12px",
    width:"100%",
  },
  roleCard:{
    margin :"10px 0",
    padding:"8px",
    width:"102px",
    height:"102px",
  },
  saveBtn: {
    "& .MuiButton-root": {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "6px 14px",
      margin: "10px 1px",
      color: "#FF4B4B",
      borderColor:"#FF4B4B"
    },
    "& .MuiButton-outlined": {
      backgroundColor: "#FFF",
      textTransform: "capitalize",
      color: "#FF4B4B",
      font: "normal normal bold 14px/19px NunitoSans-Bold",
    },
    "& .MuiButton-root:hover": {
      // backgroundColor:"inherit",
      opacity: "0.90", borderColor:"#FF4B4B"
    },
   
  },
}));

export { useStyles };
