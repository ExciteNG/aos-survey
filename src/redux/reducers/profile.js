// import {getDecodedToken, getValidToken} from "../../utility/axios-token-manager/token"

const initialState={
    userProfile:null
}
const setProfile = (state,data) => {
    return {
      ...state,userProfile:data
    }
  };



const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PROFILE":
        return  setProfile(state,action.payload);
    
      default:
        return state;
    } 
  };
  
  export default authReducer;