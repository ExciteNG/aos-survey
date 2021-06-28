import useAxios from "../../utility/axios-token-manager/init";
import { loadStart,loadStop } from "./loading";


export const getUserProfile = () => async (dispatch) => {
    dispatch(loadStart());
    const response = await useAxios.get("/influencer-marketing/influencer-dashboard");
    dispatch(loadStop());
    return dispatch({
      type: "SET_PROFILE",
      payload: response.data.data,
    });
  };