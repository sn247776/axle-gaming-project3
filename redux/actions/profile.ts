import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { BackendURL } from "@/url";
import {
  GetProfileFailure,
  GetProfileRequest,
  GetProfileSuccess,
  ProfileUpdateFailure,
  ProfileUpdateRequest,
  ProfileUpdateSuccess,
} from "../reducer/profileReducer";



export const GetProfileAction = async (dispatch: Dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        authorization: `${localStorage.getItem("authToken")}`,
      },
      withCredentials: true,
    };
    dispatch(GetProfileRequest());

    const { data } = await axios.get(`${BackendURL}/getUserByToken`, config);

    dispatch(GetProfileSuccess(data.user));
  } catch (error: any) {
    dispatch(GetProfileFailure(error));
  }
};

export const UpdateProfileAction = (profileData: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(ProfileUpdateRequest());

    const response = await axios.patch(`${BackendURL}/api/user/editUserProfile`, profileData, {
      headers: { 'authorization': `${localStorage.getItem('authToken')}` },
    });

    dispatch(ProfileUpdateSuccess(response.data));

  } catch (error:any) {
    console.error('Error updating profile', error);
    dispatch(ProfileUpdateFailure(error.response?.data?.error || 'Failed to update profile'));
  }
};