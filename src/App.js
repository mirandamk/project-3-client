import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Assignments from './pages/Assignments';
import Users from './pages/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Users} />
          <Route exact path="/assignments" component={Assignments} />
        </Switch>
      </div>
    );
  }
}

export default App;
