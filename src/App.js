//Note: need to add homepage -> '/'
//Individualism commented out for now, as it is not working yet.

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Assignments from './pages/assignments/Assignments';
import Users from './pages/Users';
import Masculinity from './pages/assignments/Masculinity';
import Signup from './pages/Signup';
// import Individualism from './pages/assignments/Individualism';
import userWelcome from './pages/user/User-welcome';
import StudyAbroadInfo from './pages/user/StudyAbroadInfo';
import Login from './pages/Login'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Users} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/masculinity" component={Masculinity} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/individualism" component={Individualism} /> */}
          <Route path="/user" component={userWelcome} />
          <Route path="/study-abroad-info" component={StudyAbroadInfo} />
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
