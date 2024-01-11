import { BackendURL } from "@/url";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { GetReviewFailure, GetReviewRequest, GetReviewSuccess, WriteReviewFailure, WriteReviewRequest, WriteReviewSuccess } from "../reducer/reviewReducer";


export const GetReviewAction = (slug:any) => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(GetReviewRequest());
  
        const response = await axios.get(`${BackendURL}/api/comments/getall/${slug}`);
        const gameData = response.data;
  
        dispatch(GetReviewSuccess(gameData));
      } catch (error:any) {
        dispatch(GetReviewFailure(error.message));
      }
    };
  };

  export const WriteReviewAction = (reviewData: any) => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(WriteReviewRequest());
  
        const response = await axios.post(
          "https://kind-pear-puffer-tie.cyclic.cloud/api/comments/upload",
          reviewData,
          {
            headers: { authorization: `${localStorage.getItem("authToken")}` },
          }
        );

        dispatch(WriteReviewSuccess(response.data));
  
      } catch (error:any) {

        dispatch(WriteReviewFailure(error.message));
      }
    };
  };