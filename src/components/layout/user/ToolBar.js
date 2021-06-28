import React, { useEffect, useRef } from "react";
import styles from "./layout.module.css";
import {logOut} from './../../../redux/actions/auth'
import {useDispatch, useSelector} from 'react-redux'
import { Typography } from "@material-ui/core";



export default function ToolBar({ user = "John Snow", toggler, state }) {
const {userProfile} = useSelector(state => state.profile)
// console.log(userProfile)
    const dispatch = useDispatch();
  const signOut=()=>{
    sessionStorage.removeItem('user')
    dispatch(logOut())
    if(typeof window !== 'undefined'){
    window.location.assign('/accounts?q=login');
    }
  }

  // 
  let bars = useRef(null);
  const ToggleController = () => {
    toggler();
  };
  useEffect(() => {
    if (state) {
      bars.current.classList.add(styles.barsTimes);
    } else {
      bars.current.classList.remove(styles.barsTimes);
    }
  }, [state]);
  return (
    <div className={styles.toolBar}>
      <div className={styles.contents}>
        <div className={styles.signOutWrapper} onClick={()=>signOut()}>
          <span>Sign Out</span>
          <i className="fa fa-sign-in ml-4"></i>
        </div>
        <div
          className={styles.togglerWrapper}
          onClick={() => ToggleController()}
        >
          <div className={styles.barToggler} ref={bars}></div>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.user + " d-flex"}>
          <span className='d-flex' >
            <i className="fa fa-user" style={{marginRight:'20px'}}></i>
          <Typography className='ml-4'>{userProfile?.fullName}</Typography>
          </span>
        </div>
      </div>
    </div>
  );
}
