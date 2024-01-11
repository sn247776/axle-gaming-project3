import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  SignInFailure,
  SignInRequest,
  SignInSuccess,
  SignUpFailure,
  SignUpRequest,
  SignUpSuccess,
} from "../reducer/authReducer";
import { BackendURL } from "@/url";

export const SignUpAction = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
    dispatch(SignUpRequest());

    const { data } = await axios.post(
      `${BackendURL}/register`,
      formData,
      config
    );
    const authToken = data.authToken;

    localStorage.setItem("authToken", authToken);
   
    dispatch(SignUpSuccess(data.message));
  } catch (error: any) {
    if(error.response.data.error){
      dispatch(SignUpFailure(error.response.data.error));
    }
    else{
      console.log(error)
    }
  }
};

export const SignInAction = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
    dispatch(SignInRequest());

    const { data } = await axios.post(`${BackendURL}/login`, formData, config);
    const authToken = data?.authToken;

    localStorage.setItem("authToken", authToken);

    dispatch(SignInSuccess(data.message));
  } catch (error: any) {
    if(error.response.data.error){
      dispatch(SignInFailure(error.response.data.error));
    }
    else{
      console.log(error)
    }
  }
};

export const GoogleSignInAction = (credentialResponse: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(SignInRequest());

    const response = await axios.post(`${BackendURL}/loginGoogle`, {
      token: credentialResponse.credential,
    });

    const data = response.data;
    const authToken = data?.authToken;

    localStorage.setItem('authToken', authToken);

    dispatch(SignInSuccess(data.message));
  } catch (error: any) {
    if (error.response.data.error) {
      dispatch(SignInFailure(error.response.data.error));
    } else {
      console.log(error);
    }
  }
};