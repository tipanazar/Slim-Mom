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
  async (product, { rejectWithValue }) => {
    try {
      const result = await diaryApi.addProductToDiary(product);
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

const productsOperations = {
  searchPoduct,
  addPoduct,
  deleteProduct,
  dayInfo,
};
export default productsOperations;