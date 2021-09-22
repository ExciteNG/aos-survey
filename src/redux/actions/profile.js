import useAxios from "../../utility/axios-token-manager/init";
import { loadStart,loadStop } from "./loading";


export const getUserProfile = () => async (dispatch) => {
    dispatch(loadStart());
    const response = await useAxios.get("/influencer-marketing/influencer-dashboard");
    dispatch(loadStop());
    console.log(response.data)
    return dispatch({
      type: "SET_PROFILE",
      payload: response.data.data,
    });
  };

  export const changeTab = (num)=>{
    return{
      type:"CHANGE_TAB",
      payload:num
    }
  }
  export const submitStatus = (state)=>{
    return{
      type:"SUBMISSION_STATUS",
      payload:state
    }
  }

  export const updateResponse = ({page,data})=>{
    return{
      type:"SAVE_RESPONSE",
      payload:{page,data}
    }
  }