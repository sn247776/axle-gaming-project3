"use client";

import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Data {
  // Define your data structure here
}

interface ReviewState {
  data: Data | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: ReviewState = {
  data: null,
  loading: false,
  error: null,
  message: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    GetReviewRequest: (state) => {
      state.loading = true;
    },
    GetReviewSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.data = action.payload;
    },

    GetReviewFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    WriteReviewRequest: (state) => {
      state.loading = true;
    },
    WriteReviewSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.message = action.payload;
    },

    WriteReviewFailure: (state, action: PayloadAction<string>) => {
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

export const { GetReviewRequest, GetReviewSuccess, GetReviewFailure,WriteReviewRequest,WriteReviewSuccess,WriteReviewFailure } =
reviewSlice.actions;

export const ReviewLoading = (state: RootState) => state.review.loading;
export const ReviewError = (state: RootState) => state.review.error;
export const ReviewMessage = (state: RootState) => state.review.message;
export const ReviewData = (state: RootState) => state.review.data;

export const ReviewclearMessage = createAction("review/clearMessage");
export const ReviewclearError = createAction("review/clearError");

export default reviewSlice.reducer;
