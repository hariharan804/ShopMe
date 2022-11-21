import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
  singleProduct: {},
  cartList: {},
  categoryList:[],
  category:[],
  cardCount: 2,
  loading: false,
  error: "",
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    // getAllProductList: (state) => {
    //   const res = getAllProducts();
    //   state.value  = res;
    // },
  },
  extraReducers: (api) => {
    api
      .addCase("product/getAll/pending", (state, action) => {
        state.loading = true;
      })
      .addCase("product/getAll/fulfilled", (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase("product/getAll/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //GetById
      .addCase("product/getById/pending", (state, action) => {
        state.loading = true;
      })
      .addCase("product/getById/fulfilled", (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase("product/getById/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //getCart
      .addCase("product/getCart/pending", (state, action) => {
        state.loading = true;
      })
      .addCase("product/getCart/fulfilled", (state, action) => {
        state.loading = false;
        state.cartList = action.payload;
      })
      .addCase("product/getCart/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //getCategory
      .addCase("product/getCategory/pending", (state, action) => {
        state.loading = true;
      })
      .addCase("product/getCategory/fulfilled", (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
      })
      .addCase("product/getCategory/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //getCategoryByID
      .addCase("product/getCategoryByID/pending", (state, action) => {
        state.loading = true;
      })
      .addCase("product/getCategoryByID/fulfilled", (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase("product/getCategoryByID/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addDefaultCase((state, action) => {});
  },
});

// export const { getAllProductList } = productListSlice.actions;

export default productListSlice.reducer;
