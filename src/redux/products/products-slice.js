import { combineReducers } from "redux";
import { createReducer, createSlice, createAction } from "@reduxjs/toolkit";
import productsOperations  from "./products-operations";

import {setPickedDate, removePickedDate} from "./products-actions"

const { searchPoduct, addPoduct, deleteProduct, dayInfo } = productsOperations;

const initialState = {
  productList: [],
  userDailyProducts: [],
  pickedDate: "",
  caloriesReceived: 0,
  loading: false,
  error: null,
};

const pickedDate = createReducer(initialState.pickedDate, {
    [setPickedDate]: (_, { payload }) => payload,
    [removePickedDate]: () => initialState.pickedDate,
  });

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    pickedDate,
  },
  extraReducers: {
    [searchPoduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [searchPoduct.fulfilled]: (state, { payload }) => {
      state.productList = payload.products;
      state.loading = false;
    },
    [searchPoduct.rejected]: () => initialState.productList,

    [addPoduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [addPoduct.fulfilled]: (state, { payload }) => {
      state.userDailyProducts = [...state.userDailyProducts, payload];
      state.loading = false;
    },
    [addPoduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [deleteProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.userDailyProducts = [
        ...state.userDailyProducts.filter(({ _id }) => _id !== payload),
      ];
      state.loading = false;
    },
    [deleteProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [dayInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [dayInfo.fulfilled]: (state, { payload }) => {
      state = [...initialState, ...payload];
      state.loading = false;
    },
    [dayInfo.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default productsSlice.reducer;
