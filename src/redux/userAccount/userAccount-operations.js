import { createAsyncThunk } from "@reduxjs/toolkit";

import authApi from "../../shared/api/authApi";

const registerUser = createAsyncThunk(
  "/auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const result = await authApi.registerUser(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const loginUser = createAsyncThunk(
  "/auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const result = await authApi.loginUser(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const logoutUser = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logoutUser();
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const getCurrentUser = createAsyncThunk(
  "/auth/user",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const result = await authApi.getCurrentUser(auth.token);
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

const resendVerification = createAsyncThunk(
  "/auth/verify",
  async (userData, { rejectWithValue }) => {
    try {
      const result = await authApi.resendVerification({ email: userData });
      return result;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);



export const userOperations = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  resendVerification
};
