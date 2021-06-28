import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./login.module.css";
import { signIn } from "./../../../utility/axios-token-manager/auth";
import Flash from "./../../../utility/Flash";
import { loadStart, loadStop } from "./../../../redux/actions/loading";
// import {authLogin} from './../../../redux/actions/auth'
import { useDispatch } from "react-redux";
import logo from './../../../components/asset/img/Excite WLL.png'
//

const redirectToMyDashboard = (user) => {
  if (typeof window !== "undefined") {
    switch (user) {
      case "EX50AFTAX":
        return window.location.assign("/services/consultants/tax");
      case "EX50AFBIZ":
        return window.location.assign("/services/consultants/business");
      case "EX50AFFIN":
        return window.location.assign("/services/consultants/loan");
      case "EX20AF":
        return window.location.assign("/services/affiliates");
      case "EX10AF":
        return window.location.assign("/console");
      case "EX90IF":
        return window.location.assign("/console");
      default:
        break;
    }
  }
};

//
const Login = (props) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loginInputs, setLoginputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    loginInputs[e.target.name] = e.target.value;
    setLoginputs({ ...loginInputs });
  };

  const handleSubmit = async () => {
    const email = loginInputs.email.trim().toLowerCase();
    const password = loginInputs.password;
    if(!email || !password) return Flash('error','Missing login details','',3000)
    try {
      dispatch(loadStart());
      const user = await signIn({ email: email.toLowerCase(), password });
      dispatch(loadStop());
      // console.log(user)
      if (user) {
        return redirectToMyDashboard(user?.userType);
      }
      if (!user) {
        Flash("error", "Invalid account details", "", 5000);
        dispatch(loadStop());
        // console.log(user);
      }
    } catch (error) {
      Flash("error", "Invalid account details", "", 5000);
    }
  };
  return (
    <section className={styles.section}>
      <div className={"container " + styles.container}>
        <div className={styles.action}>
          <div className={styles.logoWrapper}>
            <a href="/">
              <img src={logo} alt='logo' />
            </a>
            <div>Login to your account</div>
          </div>
          <div className={styles.form}>
            <div className={styles.inputWrapper}>
              <i className="fa fa-envelope"></i>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Email"
                name="email"
                value={loginInputs.email}
              />
            </div>
            <div className={styles.inputWrapper + " mt-4"}>
              <i className="fa fa-key"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                value={loginInputs.password}
                onChange={(e) => handleChange(e)}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <div className={styles.cta}>
            <button onClick={handleSubmit}>Login</button>
          </div>
          <p className={"text-center  mt-2 " + styles.forgot}>
            Forgot password ? click <a href="/forgot-password">here</a>
          </p>
          <div className={styles.create}>
            <p className={"text-center"}>
              Don't have an account ? <a href="/accounts?q=sign-up">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuth: state.auth.token !== null,
    is_seller: state.auth.is_seller,
    email: state.auth.email,
    loading: state.loading.isLoading,
  };
};

export default connect(mapStateToProps)(Login);
