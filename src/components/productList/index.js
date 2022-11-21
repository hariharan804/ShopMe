import { Box, Grid, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

export const ProductList = (props) => {
  console.log(props);
  const [productList, setProductList] = useState([]);
  const { list } = props;
  useEffect(() => {
    if (list.length > 0) {
      setProductList(list);
    }
  }, [list]);
  const navigate = useNavigate();
  return (
    <>
      <Box  sx={{ padding: "3px" }}>
        <Grid container spacing={2} rowSpacing={5}>
          {productList ? (
            productList.map((product) => (
              <Grid
              onClick={()=>navigate("/user/product/"+product.id)} 
                sx={{ padding: 0, margin: 0 }}
                key={product.id}
                item
                xs={12}
                sm={12}
                md={6}
                lg={3}
              >
                <Box sx={styles.card}>
                  <Box sx={styles.container}>
                    <img
                      style={styles.productImage}
                      src={product.image}
                      alt={product.title}
                    />
                  </Box>
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
                          component={"span"} sx={{marginLeft:"5px", color:"#878787"}}>
                        {product.rating.count}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            ))
          ) : (
            <Typography variant="h3" component={"h6"}>
              No Result...
            </Typography>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default ProductList;
