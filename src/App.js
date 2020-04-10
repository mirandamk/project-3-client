import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Assignments from './pages/assignments/Assignments';
import Users from './pages/Users';
import Masculinity from './pages/assignments/Masculinity';
// import Individualism from './pages/assignments/Individualism';
import userWelcome from './pages/user/User-welcome';
import StudyAbroadInfo from './pages/user/StudyAbroadInfo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Users} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/masculinity" component={Masculinity} />
          {/* <Route path="/individualism" component={Individualism} /> */}
          <Route path="/user" component={userWelcome} />
          <Route path="/study-abroad-info" component={StudyAbroadInfo} />
        </Switch>
      </div>
    );
  }
}

export default App;
