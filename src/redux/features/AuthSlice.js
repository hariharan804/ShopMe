import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  value: false,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (api) => {
    api
      .addCase("auth/login/pending", (state, action) => {
        state.loading = true;
      })
      .addCase("auth/login/fulfilled", (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase("auth/login/rejected", (state, action) => {
        state.loading = false;
        state.value = false;
        state.error = action.payload;
      })
      .addDefaultCase((state, action) => {});
  },
});

export default authSlice.reducer;
