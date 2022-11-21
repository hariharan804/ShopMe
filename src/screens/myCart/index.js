import {
  Add,
  Remove,
  RemoveShoppingCart,
  ShoppingBasketSharp,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Card,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleSnackbar from "../../components/alert";
import { getAllProducts, getCart } from "../../redux/productService";
import { styles } from "./styles";

export const MyCart = () => {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart(2));
  }, [dispatch]);

  const post = useSelector((state) => state.productList.value);
  const res = useSelector((state) => state.productList.cartList);

  const products = res?.[0]?.products;
  const [cartList, setCartList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [filteredList, seFilteredList] = useState([]);

  const decress = (index, quantity) => {
    let arr = filteredList.slice();
    arr[index].quantity = quantity - 1;
    let price = arr[index].price;
    let total = price * arr[index].quantity;
    arr[index].total = total;
    seFilteredList(arr);
    console.log(arr);
  };

  const incress = (index, quantity) => {
    let arr = filteredList.slice();
    arr[index].quantity = quantity + 1;
    let price = arr[index].price;
    let total = price * arr[index].quantity;
    arr[index].total = total;
    seFilteredList(arr);
    console.log(arr);
  };
  useEffect(() => {
    setCartList(products);
    setPostList(post);
  }, [products, post]);

  useEffect(() => {
    seFilteredList([]);
    if (cartList && postList) {
      if (cartList.length !== 0 && postList.length !== 0) {
        console.log(cartList, postList);
        for (let i = 0; i < cartList.length; i++) {
          for (let j = 0; j < postList.length; j++) {
            if (cartList[i].productId === postList[j].id) {
              let tem = postList[j];
              let myArr = [
                {
                  ...tem,
                  quantity: cartList[i].quantity,
                  total: postList[j].price * cartList[i].quantity,
                },
              ];
              seFilteredList((prve) => [...prve, ...myArr]);
            }
          }
        }
      }
    }
  }, [cartList, postList]);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    setSubTotal(
      filteredList.reduce((acc, cv) => {
        return acc + cv.total;
      }, 0)
    );
  }, [filteredList]);

  function removeProduct(index) {
    let arr = filteredList.slice();
    arr.splice(index, 1);
 
    seFilteredList(arr);
    console.log(filteredList);
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box sx={styles.cardContainer}>
            {filteredList.length !==0 ? (
              filteredList.map((product, index) => (
                <Card key={product.id} sx={styles.cards}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <img
                        style={styles.cartImage}
                        src={product.image}
                        alt={product.title}
                      />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Box sx={styles.innerContainer}>
                        <Typography
                          sx={styles.productTitle}
                          variant="h6"
                          component={"h2"}
                        >
                          {product.title}
                        </Typography>
                        <Grid container mt={2}>
                          <Grid item xs={5}>
                            <Typography variant="h6" component={"h2"}>
                              {product.price} $
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Rating
                              name="read-only"
                              value={product.rating.rate}
                              readOnly
                            />
                            <Typography
                              variant="body2"
                              component={"span"}
                              sx={{ marginLeft: "5px", color: "#878787" }}
                            >
                              {product.rating.count}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Box sx={styles.btnContainer}>
                          <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} sm={"auto"}>
                              <ButtonGroup
                                color="primary"
                                aria-label="medium secondary button group"
                              >
                                <Button
                                  disabled={product.quantity <= 1}
                                  onClick={
                                    product.quantity > 1
                                      ? () => {
                                          decress(index, product.quantity);
                                        }
                                      : null
                                  }
                                >
                                  <Remove />
                                </Button>
                                <Button>
                                  <Typography
                                    variant="h5"
                                    color="primary"
                                    component="h6"
                                  >
                                    {product.quantity}
                                  </Typography>
                                </Button>
                                <Button
                                  disabled={product.quantity >= 5}
                                  onClick={
                                    product.quantity < 5
                                      ? () => {
                                          incress(index, product.quantity);
                                        }
                                      : null
                                  }
                                >
                                  <Add />
                                </Button>
                              </ButtonGroup>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Typography
                                variant="h6"
                                component="h4"
                                align="center"
                              >
                                Total: {product.total} $
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box
                          sx={{
                            ...styles.priceDtl,
                            gap: "10px",
                            justifyContent: "space-evenly",
                            margin: "40px 0 0 0 !important",
                          }}
                        >
                          <Button
                            startIcon={<RemoveShoppingCart />}
                            variant="contained"
                            color="secondary"
                            sx={styles.btn}
                            onClick={()=>removeProduct(index)}
                            fullWidth
                          >
                            Remove
                          </Button>
                          <Button
                            startIcon={<ShoppingBasketSharp />}
                            variant="contained"
                            sx={styles.btn}
                            onClick={()=> setOpenAlert(true)}
                            fullWidth
                          >
                            Order Now
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              ))
            ) : (
              <Typography variant="h4" component={"h3"} align="center">
                Cart is Empty!
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box sx={styles.cardContainer}>
            <Card sx={styles.cards}>
              <Typography color="secondary" variant="h5" component="h2">
                PRICE DETAILS
              </Typography>
              <Divider />
              <Box sx={styles.priceDtl}>
                <Typography color="secondary" variant="h5" component="h2">
                  {"Price (" + filteredList?.length + ") Items"}
                </Typography>
                <Typography color="primary" variant="h5" component="h2">
                  {subTotal} {" $"}
                </Typography>
              </Box>
              <Box sx={styles.priceDtl}>
                <Typography color="secondary" variant="h5" component="h2">
                  Discount
                </Typography>
                <Typography color="primary" variant="h5" component="h2">
                  {"- "}
                  {Math.round((16 / 100) * subTotal)} {" $"}
                </Typography>
              </Box>
              <Box sx={styles.priceDtl}>
                <Typography color="secondary" variant="h5" component="h2">
                  Delivery Charges
                </Typography>
                <Typography color="primary" variant="h5" component="h2">
                  {"FREE"}
                </Typography>
              </Box>
              <Divider sx={{ borderStyle: "dashed", borderColor: "#845EC2" }} />
              <Box sx={styles.priceDtl}>
                <Typography color="secondary" variant="h5" component="h2">
                  Total Amount
                </Typography>
                <Typography color="primary" variant="h5" component="h2">
                  {Math.round(subTotal - (16 / 100) * subTotal)} {" $"}
                </Typography>
              </Box>
              <Divider sx={{ borderStyle: "dashed", borderColor: "#845EC2" }} />
            </Card>
          </Box>
        </Grid>
      </Grid>
      <SimpleSnackbar
        openAlert={openAlert}
        status={"success"}
        text="Order placed successfully..."
      />
    </>
  );
};
