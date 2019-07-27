import 'semantic-ui-less/semantic.less';
import React from 'react';
import './App.css';
import UserPage from "./components/UserPage";
import TopBar from "./components/TopBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  const contacts = [
    {
      image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Floganfuneralchapel.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgeneric-profile-avatar_352864-250x250.jpg&f=1',
      name: "Genady",
      isConnected: true
    },
    {
      image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Floganfuneralchapel.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgeneric-profile-avatar_352864-250x250.jpg&f=1',
      name: "Tammy",
      isConnected: true
    },
    {
      image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Floganfuneralchapel.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgeneric-profile-avatar_352864-250x250.jpg&f=1',
      name: "Ido",
      isConnected: false
    }
  ]

  return (
    <Router>
      <TopBar />
      <div className="userPage">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path='/user/:id' component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
