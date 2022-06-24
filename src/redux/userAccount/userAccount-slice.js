import { createSlice } from "@reduxjs/toolkit";

import { userOperations } from "./userAccount-operations";

import { calculatorOperations } from "../calculator/calculator-operations";

const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  resendVerification
} = userOperations;

const {  
  getCaloriesAndProductsForUser,
} = calculatorOperations;

const initialState = {
  user: {
    name: "",
    notAllowedProducts: [],
    parameters: {},
  },
  token: "",
  isUserLogin: false,
  loading: false,
  refreshError: null,
  error: null,
  verify: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload };
      state.loading = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user.notAllowedProducts = payload.notAllowedProducts;
      state.user.parameters = payload.parameters;
      state.user.name = payload.name;
      state.token = payload.token;
      state.verify = payload.verify;
      state.isUserLogin = true;
      state.loading = false;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    [logoutUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: (state) => {
      state.user = { ...initialState.user };
      state.token = "";
      state.isUserLogin = false;
      state.loading = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    [getCurrentUser.pending]: (state) => {
      state.loading = true;
      state.refreshError = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload };
      state.isUserLogin = true;
      state.loading = false;
    },
    [getCurrentUser.rejected]: (state) => {
      state.refreshError = true;
      state.loading = false;
    },

    [resendVerification.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [resendVerification.fulfilled]: (state) => {
      state.loading = false;
    },
    [resendVerification.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    [getCaloriesAndProductsForUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCaloriesAndProductsForUser.fulfilled]: (state,  { payload }) => {
      state.user.notAllowedProducts = payload.products;
      state.user.parameters.calories = payload.calories;      
      state.loading = false;
    },
    [getCaloriesAndProductsForUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
