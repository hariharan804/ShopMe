import { Box, Button, Grid, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./styles";
import { InputBox } from "../../components/inputBox";
import SimpleSnackbar from "../../components/alert";
import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthService";

export const Login = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles(props);
  const navigate = useNavigate();
  const onChangePassword = (val) => {
    setPasswordValue(val.target.value);
  };
  const onChangeMail = (val) => {
    setMailValue(val.target.value);
  };
  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const onLoginBtn = () => {
    // console.log(mailValue, passwordValue);
    if (mailValue && passwordValue) {
      // {
      //   "username":"johnd","password":"m38rmF$"
      // }
      localStorage.removeItem("auth");
    localStorage.setItem('auth', true);
      dispatch(login(true));
      navigate("/user/home");
    } else {
      setOpenAlert(true);
    }
  };
  return (
    <section>
      <Box className={classes.root}>
        <Grid container justifyContent={"space-between"}>
          <Grid
            item
            xs={0}
            sm={0}
            md={0}
            lg={4}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "inherit" },
            }}
          >
            <Box className={classes.sideBanner}>
              <Typography component="h1" color="background.white" variant="h1">
                Login
              </Typography>
              <Typography component="h3" color="text.light" variant="h6">
                Get access to your Orders, Wishlist and Recommendations
              </Typography>
              <img
                className={classes.bannerImage}
                src={require("../../assets/images/login.jpg")}
                alt="login"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <div className={classes.signInCard}>
              <Typography
                variant="h4"
                component="h1"
                className={classes.signTitle}
              >
                Log In
              </Typography>
              <div className={classes.inputBar}>
                <InputBox
                  type="text"
                  label="Mobile Number / Email ID"
                  placeholder="Enter Mobile Number / Email ID"
                  onChangeFun={onChangeMail}
                />
              </div>
              <div className={classes.inputBar}>
                <InputBox
                  type={viewPassword ? "text" : "password"}
                  label="Enter Password"
                  placeholder="Enter your password"
                  onChangeFun={onChangePassword}
                  endAdornment={
                    <span
                      style={{ marginTop: "5px", cursor: "pointer" }}
                      onClick={() => setViewPassword(!viewPassword)}
                    >
                      {viewPassword ? (
                        <VisibilityOutlinedIcon color="primary" />
                      ) : (
                        <VisibilityOffOutlinedIcon color="primary" />
                      )}
                    </span>
                  }
                />
              </div>
              <Typography
                variant="body3"
                component="h6"
                align="right"
                className={classes.forgetPassword}
              >
                Did you forget your password? <span>Click Here</span>
              </Typography>
              <div className={classes.poweredBy}>
                <span>Powered by </span>
                Shop Me
              </div>
              <Button
                onClick={onLoginBtn}
                className={classes.loginBtn}
                fullWidth={true}
                variant="contained"
              >
                Log In
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
      <SimpleSnackbar
        openAlert={openAlert}
        status={"error"}
        text="Login Failed.."
      />
    </section>
  );
};

export default Login;
