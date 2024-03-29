import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authActions";

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
  loading: false,
  user: null,
  token,
  error: null,
};

//login user
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = null;
      state.error = null;
    })

    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      if (payload.user) {
        state.user = payload.user;
      }
    })

    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })

    //REGIATER USER
    builder.addCase(userRegister.pending, (state) => {
      state.loading = null;
      state.error = null;
    })

    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;
      // state.user = payload.user;
      state.success = true;
    });

    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    //CURRENT USER
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = null;
      state.error = null;
    })

    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;

    })

    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});


export default authSlice;
