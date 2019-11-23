import 'semantic-ui-less/semantic.less';
import React from 'react';
import './App.css';
import UserPage from "./components/UserPage";
import TopBar from "./components/TopBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import AdvancedSignUp from "./components/AdvancedSignUp"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {


  return (
    <Router>
      <TopBar />
      <div className="userPage">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route Strict path="/signup" component={SignUp} />
          {/* <Route Strict path='/user/:id' component={UserPage} /> */}
          <Route Strict path='/user/:id/additional-info' component={AdvancedSignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
