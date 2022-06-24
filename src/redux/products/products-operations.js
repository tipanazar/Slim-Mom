import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

import diaryApi from "../../shared/api/diary";

const formateDate = (startDate) => {
  const day = startDate.getDate();
  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();
  const chosenDate = `${day > 9 ? day : `0` + day}-${
    month > 9 ? month : `0` + month
  }-${year}`;
  return { payload: chosenDate };
};

const addPoduct = createAsyncThunk(
  "/diary/addProduct",
  async (productInfo, { rejectWithValue }) => {
    try {
      const result = await diaryApi.addProductToDiary(productInfo);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const deleteProduct = createAsyncThunk(
  "/diary/deleteProduct",
  async (info, { rejectWithValue }) => {
    try {
      const result = await diaryApi.deleteProductFromDiary(info);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const dayInfo = createAsyncThunk(
  "/diary/info",
  async (date, { rejectWithValue }) => {
    try {
      const result = await diaryApi.getDiaryInfo(formateDate(date).payload);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const dateSetAction = createAction("date/set", formateDate);

const productsOperations = {
  addPoduct,
  deleteProduct,
  dayInfo,
  dateSetAction,
  formateDate,
};

export default productsOperations;
