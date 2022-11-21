import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  inputBlock: {
    margin: "8px 0px",
  },

  select: {
    "& *": {
      border: "none !important",
    },
    "& .MuiSelect-select": {
      font: "normal normal 600 14px/20px NunitoSans-Bold !important",
      border: "1px solid #E4E8EE !important",
      borderRadius: "10px",
      padding: "8.2px 10px !important",
      color: theme.palette.secondary.light + " !important",
      "&:hover": { border: "1px solid #5078E1 !important" },
    },
    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "10px",
        border: "1px solid #5078E1 !important",
      },
    },
    // "& .MuiSelect-select:hover": { border: "1px solid #5078E1 !important" },
  },

  label: {
    font: "normal normal 600 11px/16px NunitoSans-Regular !important",
    letterSpacing: "0.05rem",
    color: theme.palette.background.gray + " !important",
    marginBottom: "5px",
  },
}));

export { useStyles };
