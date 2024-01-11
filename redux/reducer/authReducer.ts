"use client";

import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Data {
  // Define your data structure here
}

interface AuthState {
  data: Data | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: AuthState = {
  data: null,
  loading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignUpRequest: (state) => {
      state.loading = true;
    },
    SignUpSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.message = action.payload;
    },

    SignUpFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    SignInRequest: (state) => {
      state.loading = true;
    },
    SignInSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.message = action.payload;
    },

    SignInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearMessage(state) {
      state.message = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { SignUpRequest, SignUpSuccess, SignUpFailure,SignInRequest,SignInSuccess,SignInFailure } =
  authSlice.actions;

export const AuthLoading = (state: RootState) => state.auth.loading;
export const AuthError = (state: RootState) => state.auth.error;
export const AuthMessage = (state: RootState) => state.auth.message;

export const AuthclearMessage = createAction("auth/clearMessage");
export const AuthclearError = createAction("auth/clearError");

export default authSlice.reducer;
