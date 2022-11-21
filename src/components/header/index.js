import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/productService";
import Cookies from "universal-cookie";

export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const categoryList = useSelector((state) => state.productList.categoryList);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(categoryList);
  }, [categoryList]);

  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  const cookies = new Cookies();

  const logout = () => {
    console.log("logout");
    cookies.set('auth', 'false', { path: '/' }); 
    dispatch(login(false));
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const menu = (
    <>
      <Typography
        variant="h6"
        color="#fff"
        sx={{ marginRight: "12px", cursor: "pointer" }}
        onClick={() => navigate("/user/home")}
        component="span"
      >
        Home
      </Typography>
      <Typography
        variant="h6"
        color="#fff"
        sx={{ marginRight: "12px", cursor: "pointer" }}
        onClick={handleClickMenu}
        component="span"
      >
        Category
      </Typography>
      <Typography
        variant="h6"
        color="#fff"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/user/cart")}
        component="span"
      >
        View Cart
      </Typography>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorElMenu}
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            maxHeight: 45 * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleCloseMenu}>
            <Typography
              onClick={() => navigate("/user/category/" + option)}
              variant="h6"
              component="h6"
            >
              {option}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <>
      <header className={classes.root}>
        <Grid
          container
          sx={{ marginTop: 0, paddingTop: 0, width: "100%" }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              paddingTop: 0,
            }}
            xs={"auto"}
            className={classes.imageSection}
          >
            <div>
              <span>
                <Typography
                  onClick={() => {
                    navigate("/");
                  }}
                  className={classes.siteName}
                  component="h1"
                  variant="h3"
                >
                  Shop Me
                </Typography>
              </span>
            </div>
          </Grid>
          <Grid
            item
            sx={{
              paddingTop: 0,
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
              },
            }}
            xs={"auto"}
            className={classes.imageSection}
          >
            <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
              {menu}
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              paddingTop: 0,
            }}
            xs={"auto"}
            className={classes.imageSection}
          >
            <Grid
              container
              sx={{ marginTop: 0, paddingTop: 0 }}
              alignItems="center"
            >
              <Grid
                item
                sx={{ paddingTop: 0 }}
                xs={"auto"}
                className={classes.imageSection}
              ></Grid>
              <ShoppingCartOutlinedIcon
                color="text"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/user/cart")}
              />
              <Typography
                onClick={() => navigate("/user/cart")}
                color={"text.light"}
                sx={{ margin: "0 5px", cursor: "pointer" }}
                component={"h3"}
                variant="h5"
              >
                2
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#E4E8EE", margin: "6px 10px" }}
              />
              <Grid
                item
                sx={{ paddingTop: 0 }}
                xs={"auto"}
                className={classes.imageSection}
                onClick={handleClick}
              >
                <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>
              </Grid>
              <Grid
                item
                sx={{
                  paddingTop: 0,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
                  cursor: "pointer",
                }}
                xs={"auto"}
                className={classes.imageSection}
                onClick={handleClick}
              >
                <h5 className={classes.userName}>Harihran</h5>
                <h6 className={classes.role}>User</h6>
              </Grid>
              <Grid
                item
                sx={{ paddingTop: 0 }}
                xs={"auto"}
                className={classes.imageSection}
                onClick={handleClick}
              >
                <h6 className={classes.dropDown}>&#x276F;</h6>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box className={classes.profileInfo} sx={{ cursor: "pointer" }}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ width: 62, height: 62, marginRight: "10px" }}>
                    H
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Hariharan"
                  secondary={
                    <>
                      {"hari@gmail.com "}
                      <Typography
                        sx={{ display: "block" }}
                        className={classes.roleViewer}
                        component="span"
                        variant="body2"
                      >
                        User
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
            <Divider />
            <Box className={classes.roleBox}>
              <Box
                sx={{
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  rowGap: "5px",
                  padding: "10px",
                  borderRadius: "12px",
                  width: "87%",
                  display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
                  backgroundColor: "#845EC2",
                }}
              >
                {menu}
              </Box>

              <Typography
                variant="h6"
                sx={{ fontSize: "14px", marginTop: "8px" }}
                color={"#4E5A6B"}
                component="h6"
              >
                My Profile
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "14px", marginTop: "8px" }}
                color={"#4E5A6B"}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "14px", marginTop: "8px" }}
                color={"#4E5A6B"}
              >
                View Cart
              </Typography>
              <Box className={classes.saveBtn}>
                <Button onClick={logout} variant="outlined">
                  Sign Out
                </Button>
              </Box>
            </Box>
          </Box>
        </Menu>
      </header>
    </>
  );
};

export default Header;
