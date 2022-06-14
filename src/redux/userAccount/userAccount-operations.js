import { createAsyncThunk } from '@reduxjs/toolkit';

import auth from '../../shared/api/auth';

const registerUser = createAsyncThunk(
  '/auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await auth.registerUser(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const loginUser = createAsyncThunk(
  '/auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await auth.loginUser(userData);
      console.log(result);
      return result;
      
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

const logoutUser = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await auth.logoutUser();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  '/user',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const result = await auth.getCurrentUser(auth.accessToken);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.accessToken) {
        return false;
      }
    },
  }
);

export const userOperations = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};