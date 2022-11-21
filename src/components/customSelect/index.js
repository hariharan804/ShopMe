import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"; 
import { useState } from "react";
import { useStyles } from "./styles";

export const CustomSelect = (props) => {
  const classes = useStyles(props);
  // const theme = useTheme();
//   const inputOnFocused = {
//     "& .Mui-focused": {
//         color: theme.palette.secondary.dark+' !important',
//     },
//     "& .Mui-focused": {
//         border: '1px solid #5078E1',
//     },
   
// }
  const { label, defaultValue, options } = props;
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={classes.inputBlock}>
      <InputLabel
        className={classes.label}
        variant="standard"
        htmlFor="uncontrolled-native"
      >
        {label}
      </InputLabel>
      <FormControl sx={{border:"none"}} fullWidth={true} className={classes.select} >
        <Select value={selectedValue} onChange={handleChange}>
        <MenuItem value={""}>None</MenuItem>
        {options && options.map((option, index)=>(
          <MenuItem key={index} value={option.value}>{option.key}</MenuItem>
       ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
