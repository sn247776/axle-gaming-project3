'use client';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import globalReducer from "./global/globalSlice"
import profileReducer from './reducer/profileReducer';
import reviewReducer from './reducer/reviewReducer';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        global:globalReducer,
        profile:profileReducer,
        review:reviewReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;