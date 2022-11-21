import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputBlock: {
    margin: "12px 0px",
  },
 
  input: {
    font: "normal normal 600 16px/19px NunitoSans-Bold !important",
    border: "1px solid #E4E8EE",
    borderRadius: "10px",
    padding: "3px 6px",
    color: theme.palette.primary.dark+' !important',
    "&:hover":{
      border: "1px solid "+theme.palette.primary.main+" !important",
    },
    
  },

  label: {
    font: "normal normal 600 14px/16px NunitoSans-Regular !important",
    letterSpacing:"0.05rem",
  },
}));

export { useStyles };
