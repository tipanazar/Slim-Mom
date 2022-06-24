import { createSlice } from "@reduxjs/toolkit";
import productsOperations from "./products-operations";

const { addPoduct, deleteProduct, dayInfo, dateSetAction, formateDate } =
  productsOperations;

const initialState = {
  productList: [],
  pickedDate: formateDate(new Date()).payload,
  caloriesReceived: 0,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [addPoduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [addPoduct.fulfilled]: (state, { payload }) => {
      state.caloriesReceived = payload.caloriesReceived;
      state.productList = [...payload.productList];
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
      state.productList = [...payload.productList];
      state.caloriesReceived = payload.caloriesReceived;
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
      state.caloriesReceived = payload.caloriesReceived;
      state.productList = [...payload.productList];
      state.loading = false;
    },
    [dayInfo.rejected]: (state) => {
      state.productList = [];
      state.caloriesReceived = 0;
      state.loading = false;
      state.error = true;
    },
    [dateSetAction]: (state, { payload }) => {
      state.pickedDate = payload;
      return state;
    },
  },
});

export const { actions } = productsSlice;

export default productsSlice.reducer;
