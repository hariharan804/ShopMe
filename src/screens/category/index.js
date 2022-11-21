import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/productList';
import {  getCategoryByID } from '../../redux/productService';

function Categoty() {
 
const dispatch = useDispatch();
const {category} = useParams();
console.log(category);
useEffect(() => {
  dispatch(getCategoryByID(category));
}, [category]);

const res = useSelector((state) => state.productList.category);
console.log(res);

return (
  <>
    <Typography sx={{marginBottom:"20px"}} variant="h4" component="h1">
     Category: {category}
    </Typography>
    <ProductList list={res} />
  </>
);
}

export default Categoty