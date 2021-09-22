import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ApiLoader from "./utility/ApiLoader";
import { connect } from "react-redux";
import { NotificationContainer } from "react-notifications";
import DashboardConsole from "./components/dashboard/console/Index";
import AcknowledgePage from "./components/pages/landing/forms/AcknowledgePage";
// LAZY LOAD PAGES
// import * as Pages from "./components/routes/page";
import * as Pages from "./components/routes";
import Onboarding from "./components/pages/landing/Onboarding";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          window.location.assign("/")
        )
      }
    />
  );
}
function PrivateSuccessRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          window.location.assign("/")
        )
      }
    />
  );
}

function App({ token, isLogged, auth, status }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Onboarding}></Route>
        <Route exact path="/start" component={Pages.HomePage}></Route>
        <Route exact path="/accounts" component={Pages.AuthPage}></Route>
        <PrivateRoute
          exact
          authed={
            isLogged && token.length > 0 && auth.auth.userType === "EX90IF"
          }
          path="/survey-dashboard"
          component={DashboardConsole}
        />
        <PrivateSuccessRoute
          exact
          authed={true}
          path="/survey-success"
          component={AcknowledgePage}
        />
      </Switch>
      <ApiLoader />
      <NotificationContainer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuth: state.auth.token !== null,
    isLogged: state.auth.isLogged,
    status: state.profile.submitStatus,
    loading: state.loading.isLoading,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
