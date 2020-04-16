//Note: need to add homepage -> '/' ==> Done. Previous User.js is now replaced by Home.js.
//Individualism commented out for now, as it is not working yet.

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Assignments from './pages/assignments/Assignments';
import Home from './pages/Home';
// import Masculinity from './pages/assignments/Masculinity';
import WelcomeAssignment from './pages/assignments/Welcome-assignment';
import WeeklyAssignments from './pages/assignments/WeeklyAssignments';
import HofstedeCountries from './pages/assignments/HofstedeCountries';
import HofstedeIntro from './pages/assignments/HofstedeIntro';
import Dimensions from './pages/assignments/Dimensions';
import ResultMasculinity from './pages/assignments/results/ResultMasculinity'
import ResultUncertainty from './pages/assignments/results/ResultUncertainty'
import ResultPowerDistance from './pages/assignments/results/ResultPowerDistance'
import ResultLongTerm from './pages/assignments/results/ResultLongTerm'
import ResultIndulgence from './pages/assignments/results/ResultIndulgence'
import ResultIndividualism from './pages/assignments/results/ResultIndividualism'

import Signup from './pages/Signup';
// import Individualism from './pages/assignments/Individualism';
import userWelcome from './pages/user/User-welcome';
import StudyAbroadInfo from './pages/user/StudyAbroadInfo';
import Login from './pages/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/wassignments" component={WelcomeAssignment} />
          <Route path="/countries" component={HofstedeCountries}/>
          <Route path="/weekassignments" component={WeeklyAssignments} />
          <Route path="/hofstede-intro" component={HofstedeIntro} />
          <Route path="/dimensions" component={Dimensions} />
          {/* <Route path="/masculinity" component={Masculinity} /> */}
          <Route path="/resultmasculinity" component={ResultMasculinity} />
          <Route path="/resultuncertainty" component={ResultUncertainty} />
          <Route path="/resultpowerdistance" component={ResultPowerDistance} />
          <Route path="/resultlongterm" component={ResultLongTerm} />
          <Route path="/resultindulgence" component={ResultIndulgence} />
          <Route path="/resultIndividualism" component={ResultIndividualism} />

           {/* <Route path="/photomasculinity" componenent={PhotoMasculinity} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={userWelcome} />
          <Route path="/study-abroad-info" component={StudyAbroadInfo} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
