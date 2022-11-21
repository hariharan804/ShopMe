import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../interceptors";

export const getAllProducts = createAsyncThunk(
  "product/getAll",
  async (arg, API) => {
    console.log(arg);
    try {
      const res = await http.get("products");
      // console.log("data",res.data);
      return res.data;
    } catch (error) {
      API.rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getById",
  async (arg, API) => { 
    try {
      const res = await http.get("products/"+arg);
      return res.data;
    } catch (error) {
      API.rejectWithValue(error.message);
    }
  }
);

export const getCart = createAsyncThunk(
  "product/getCart",
  async (arg, API) => { 
    try {
      const res = await http.get("carts/user/2");
      return res.data;
    } catch (error) {
      API.rejectWithValue(error.message);
    }
  }
);

export const getCategory = createAsyncThunk(
  "product/getCategory",
  async (arg, API) => { 
    try {
      const res = await http.get("products/categories");
      return res.data;
    } catch (error) {
      API.rejectWithValue(error.message);
    }
  }
);

export const getCategoryByID = createAsyncThunk(
  "product/getCategoryByID",
  async (arg, API) => { 
    try {
      const res = await http.get("products/category/"+arg);
      return res.data;
    } catch (error) {
      API.rejectWithValue(error.message);
    }
  }
);