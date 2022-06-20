import { createAsyncThunk } from '@reduxjs/toolkit';

import productApi from '../../shared/api/products';
import diaryApi from '../../shared/api/diary';

const searchPoduct = createAsyncThunk(
  "/products/search",
  async (searchQuerry, { rejectWithValue }) => {
    try {
      const result = await productApi.searchProducts(searchQuerry);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

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
      const result = await diaryApi.getDiaryInfo(date);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const setDate =  {reducer : (state, {payload}) => {
  state.pickedDate = payload
  return state
},
prepare: (startDate) => {
const day = startDate.getDate();
const month = startDate.getMonth() + 1;
const year = startDate.getFullYear();
const chosenDate = `${day > 9 ? day : `0` + day}-${
  month > 9 ? month : `0` + month
}-${year}`;
return { payload: chosenDate }
}}


const productsOperations = {
  searchPoduct,
  addPoduct,
  deleteProduct,
  dayInfo,  
  setDate,
};
export default productsOperations;