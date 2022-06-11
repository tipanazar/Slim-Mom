import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from '../../shared/api/userApi/authApi';

const registerUser = createAsyncThunk(
  '/auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await authApi.registerUser(userData);
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
      const result = await authApi.loginUser(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const logoutUser = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await authApi.logoutUser();
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
      const result = await authApi.getCurrentUser(auth.accessToken);
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