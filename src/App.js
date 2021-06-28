import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from "./components/Landing/Index";
import Account from "./components/accounts/Index";
import ApiLoader from './utility/ApiLoader';
import {connect} from 'react-redux';
import {NotificationContainer} from 'react-notifications';
import Landing from './components/dashboard/Landing';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : window.location.assign('/accounts?q=login')}
    />
  )
}

function App({token,isLogged,auth}) {
  return (
    <>
     <Switch>
       <Route exact path='/' component={Home}></Route>
       <Route exact path='/accounts' component={Account}></Route>
     <PrivateRoute exact authed={isLogged && token.length > 0 && auth.auth.userType==="EX90IF" } path='/console' component={Landing} />
     </Switch>
     <ApiLoader/>
     <NotificationContainer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuth: state.auth.token !== null,
    isLogged: state.auth.isLogged,
    email:state.auth.email,
    loading:state.loading.isLoading,
    auth:state.auth
  };
};



export default connect(
  mapStateToProps
)(App);