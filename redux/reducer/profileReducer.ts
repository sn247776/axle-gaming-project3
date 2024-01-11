"use client";

import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Data {
  // Define your data structure here
}

interface ProfileState {
  data: Data | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
  message: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    GetProfileRequest: (state) => {
      state.loading = true;
    },
    GetProfileSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.data = action.payload;
    },

    GetProfileFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    ProfileUpdateRequest: (state) => {
      state.loading = true;
    },
    ProfileUpdateSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.message = action.payload;
    },

    ProfileUpdateFailure: (state, action: PayloadAction<string>) => {
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

export const { GetProfileRequest, GetProfileSuccess, GetProfileFailure,ProfileUpdateRequest,ProfileUpdateSuccess,ProfileUpdateFailure } =
profileSlice.actions;

export const ProfileLoading = (state: RootState) => state.profile.loading;
export const ProfileError = (state: RootState) => state.profile.error;
export const ProfileMessage = (state: RootState) => state.profile.message;
export const ProfileData = (state: RootState) => state.profile.data;

export const ProfileclearMessage = createAction("profile/clearMessage");
export const ProfileclearError = createAction("profile/clearError");

export default profileSlice.reducer;
