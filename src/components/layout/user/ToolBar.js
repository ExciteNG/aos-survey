import React, { useEffect, useRef } from "react";
import styles from "./layout.module.css";
import {logOut} from './../../../redux/actions/auth'
import {useDispatch} from 'react-redux'



export default function ToolBar({ user = "John Snow", toggler, state }) {

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
        <div className={styles.user}>
          <span>
            <i className="fa fa-user mr-4"></i>
            Welcome
          </span>
        </div>
      </div>
    </div>
  );
}
