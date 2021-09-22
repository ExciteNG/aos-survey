import React from "react";
import { connect } from "react-redux";
import logo from "../../asset/img/logo.png";
import person from "../../asset/img/person.png";
import { changeTab} from "../../../redux/actions/profile";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Index = ({ page, changePage }) => {
  // console.log(page,changePage)

  return (
    //
    <React.Fragment>
      <section className="onboarding">
        <div className="container">
          <img src={logo} width="120px" alt="logo" />
        </div>
        <div className="container contents">
            <div>
          <div className="row">
            <div className="col-lg-6">
              <div className="onboarding-text-wrapper">
                <h1>
                  Online <span>Survey</span>
                </h1>
                <Typography variant="body2">
                  At AOS Orwell, we use your feedback to improve the quality of
                  our products and services. Thank you for taking time to
                  complete this survey.
                </Typography>
                <Typography variant="caption" className="mt-2">
                (Estimated time to complete: 15 minutes)
                </Typography>
                <Link className="onboarding-cta-wrapper" to="/start">
                  <Button>Start</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{width:'100%', height:'100%', objectFit:"contain"}} className="onboarding-img-wrapper">
                <img src={person} 
                style={{width:'50%'}}
                alt="person"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  page: state.profile.page,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (num) => dispatch(changeTab(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
