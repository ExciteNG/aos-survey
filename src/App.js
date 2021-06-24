import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from "./components/Landing/Index";
import Register from "./components/accounts/Registration/Register";
function App() {
  return (
    <>
     <Switch>
       <Route exact path='/' component={Home}></Route>
       <Route exact path='/sign-up' component={Register}></Route>
     </Switch>
    </>
  );
}

export default App;
