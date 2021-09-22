// import {getDecodedToken, getValidToken} from "../../utility/axios-token-manager/token"

const initialState={
    page:1,
    profile:{"Name":"","Company":"","SRR":[]},
    "Page 1":{"Name":"","Company":"","SRR":[]},
    "Page 2":[],
    "Page 3":{"Recommend":"","PRS":"","Suggestion":""},
    submitStatus:false
}
// const setProfile = (state,data) => {
//     return {
//       ...state,userProfile:data
//     }
//   };



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      // case "SET_PROFILE":
      //   return  setProfile(state,action.payload);
      case "CHANGE_TAB":
        return  {
          ...state,page:action.payload
        };
      case "SAVE_RESPONSE":
        return  {
          ...state,[action.payload.page]:action.payload.data
        };
      case "SUBMISSION_STATUS":
        return  {
          ...state,submitStatus:action.payload
        };
    
      default:
        return state;
    } 
  };
  
  export default profileReducer;