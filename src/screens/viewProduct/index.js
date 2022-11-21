import { AddShoppingCart, ShoppingBasket, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Button,
  Grid,
  ListItemText,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../redux/productService";
import { styles } from "./styles";

function ViewProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);
  const [product, setProduct] = useState([]);
  const res = useSelector((state) => state.productList.singleProduct);
  console.log(res);
  const random = Math.floor(Math.random() * 31) + 1;
const navigate = useNavigate();
  useEffect(() => {
    setProduct(res);

  }, [res]);
  const [cart, setCart] = useState(true);
  const {
    image = "",
    title = "",
    category = "",
    description = "",
    price = "",
  } = product;
  const rate = product?.rating?.rate | 0;
  const count = product?.rating?.count;
  return (
    <>
      <Grid container spacing={2} sx={{ padding: "10px" }}>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <img style={styles.image} src={image} alt={title} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={styles.listText} variant="h3" component="h1">
            {title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography sx={styles.listText} variant="h4" component="h2">
                {price} $ <span id="rate">{Math.floor(price + random)} $</span>
                <span id="offer">{random}% off</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Rating
                sx={{ marginTop: "10px" }}
                name="read-only"
                value={rate}
                readOnly
              />
              <Typography
                variant="h6"
                component={"span"}
                sx={{ marginLeft: "5px", color: "#878787" }}
              >
                {count} Ratings
              </Typography>
            </Grid>
          </Grid>
          <Typography sx={styles.listText} variant="h4" component="h2">
            <span>Category : </span>
            {category}
          </Typography>
          <Typography sx={styles.listText} variant="h4" component="h2">
            <span>Description : </span>
            {description}
          </Typography>
          <Box sx={styles.btnContainer}>
            <Stack
              mt={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={3}
              justifyContent="center"
            >
              <ListItemText>
                <Button onClick={cart ? ()=>{setCart(false)}: ()=>{navigate("/user/cart")}} startIcon={cart ?<AddShoppingCart/>: <ShoppingCartCheckout/>} sx={styles.addCard} variant="contained" fullWidth>
                {cart ? "Add Card":"Go to Card"}
                </Button>
              </ListItemText>
              <ListItemText>
                <Button startIcon={ <ShoppingBasket/>} sx={styles.buy} variant="contained" fullWidth>
                  Buy Now
                </Button>
              </ListItemText>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ViewProduct;
