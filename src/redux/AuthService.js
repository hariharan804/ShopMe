import { createAsyncThunk } from "@reduxjs/toolkit";
// import http from "../interceptors";

export const login = createAsyncThunk("auth/login", async (arg, API) => {
  try { 
    // const res = await http.post("/auth/login", arg);
    // console.log(res.data);
    
    return arg;
  } catch (error) {
    console.log(error);
    API.rejectWithValue(error.message);
  }
});
