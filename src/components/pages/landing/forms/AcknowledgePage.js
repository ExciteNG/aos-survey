import React from "react";
import { connect } from "react-redux";
import logo from "../../../asset/img/logo.png";
import { changeTab, updateResponse } from "../../../../redux/actions/profile";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
//
export const AcknowledgePage = (props) => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="intro">
              <div>
                <img src={logo} width="120px" alt="logo" />
              </div>
              <p>Submitted successfully. Thank you.</p>
              <Link className="acknowledgement-cta-wrapper" to="/">
                <Button>Close</Button>
              </Link>
            </div>
          </div>
          <div className="col-lg-2" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  page: state.profile?.page,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (num) => dispatch(changeTab(num)),
    updateResponse: (page, data) => dispatch(updateResponse({ page, data })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AcknowledgePage);
