import { combineReducers } from "redux"
import loadingReducer from "./loading"
import auth from './auth'
import profile from './profile'



const rootReducer = combineReducers({
  loading:loadingReducer,
  auth:auth,
  profile
})

export default rootReducer;