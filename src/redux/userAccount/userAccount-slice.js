import { createSlice } from "@reduxjs/toolkit";

import { userOperations } from "./userAccount-operations";

const { registerUser, loginUser, logoutUser, getCurrentUser } = userOperations;

const initialState = {
  user: {
    email: "",
    name: "",
  },
  token: "",
  isUserLogin: false,
  loading: false,
  refreshError: null,
  error: null,
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
      state.isUserLogin = true;
      state.isUserLogin = true; // если что убрать
      state.loading = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      console.log("Payload userSlice: ", payload);
      state.error = true; // распылить сюда пэйлоад что бы пользователь получил сообщение с бекенда
      state.loading = false;
    },

    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user }; // .user может быть другое
      state.token = payload.token;
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
    [logoutUser.fulfilled]: (state, { payload }) => {
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
      // payload user, отправить с бека имя и почту
      state.isUserLogin = true;
      state.loading = false;
    },
    [getCurrentUser.rejected]: (state) => {
      state.refreshError = true; // распылить пэйлоад
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
