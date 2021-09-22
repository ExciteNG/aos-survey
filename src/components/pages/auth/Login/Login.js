import React from "react";
import { connect } from "react-redux";

//
const Login = (props) => {
 
  return (
    <section className="container">
     Login
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
