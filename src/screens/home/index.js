import { Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productService";
import React, { useEffect } from "react";
import ProductList from "../../components/productList";
import { styles } from "./styles";

function Home() {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const res = useSelector((state) => state.productList.value);
  console.log(res);

  return (
    <>
      <Typography sx={styles.heading} variant="h3" component="h1">
        Recently Added
      </Typography>
      <ProductList list={res} />
    </>
  );
}

export default Home;
