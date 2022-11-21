// import { TextareaAutosize } from "@material-ui/core";
// import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import { InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useStyles } from "./styles";

export const InputBox = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();

  const {
    type,
    label,
    placeholder,
    defaultValue,
    disabled,
    endAdornment,
    startAdornment,
    row,
    onChangeFun,
  } = props;

  // const inputOnFocused = {
  //   "& .Mui-focused": {
  //     color: theme.palette.secondary.dark + " !important",
  //   },
   
  //   "& .Mui-focused": {
  //     border: "1px solid #5078E1",
  //   },
  // };
  return (
    <div className={classes.inputBlock}>
      {
      // type === "date" ? (
      //   <MobileDatePicker
      //     label="For mobile"
      //     value={"value"}
      //     // onChange={(newValue) => {
      //     //   setValue(newValue);
      //     // }}
      //     renderInput={(params) => <TextField {...params} />}
      //   />
      // ) :
       type !== "textArea" ? (
        <TextField
          sx={
            (
            disabled && {
              opacity: 0.9,
              "& div, div:hover": { background: theme.palette.background.lightGray, border:"none !important"},
            })
          }
          label={label}
          type={type}
          fullWidth={true}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChangeFun}
          InputLabelProps={{
            shrink: true,
            className: classes.label,
          }}
          InputProps={{
            readOnly: disabled,
            disableUnderline: true,
            className: classes.input,
            startAdornment: (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ),
          }}
          variant="standard"
        />
      ) : (
        // <TextareaAutosize
        //   className={classes.input} 
        //   minRows={row}
        //   aria-label="maximum height"
        //   placeholder={placeholder}
        //   defaultValue={defaultValue}
        //   style={{ minWidth: "100%", maxWidth: "100%" }}
        // />
        null
      )}
    </div>
  );
};

export default InputBox;
