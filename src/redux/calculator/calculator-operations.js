import { createAsyncThunk } from "@reduxjs/toolkit";

import productsApi from "../../shared/api/products"

const getCaloriesAndProductsForUser = createAsyncThunk(
    "/products/getForUser",
    async (data, { rejectWithValue }) => {    
      try {
        const result = await productsApi.getCaloriesAndProductsForUser( data, data.bloodType);      
        return result;
      } catch (err) {
        return rejectWithValue(err.response.data.message);
      }
    }
  );

  export const calculatorOperations = {    
    getCaloriesAndProductsForUser
  };