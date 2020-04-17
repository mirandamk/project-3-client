import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import userWelcome from './pages/user/User-welcome';

// import userProfile from './pages/user/profile';  // Obs, this does not exist for now. 
import StudyAbroadInfo from './pages/user/StudyAbroadInfo';
import StartAssignments from './pages/user/Welcome-assignment';
import ResultDimensions from './pages/assignments/results/ResultDimensions';

import Homesickness from './pages/user/Homesickness';
import HomeUniContact from './pages/user/HomeUniContact';
import ExchangeUniContact from './pages/user/ExchangeUniContact';


import HofstedeIntro from './pages/hofstede/HofstedeIntro';
import HofstedeCountries from './pages/hofstede/HofstedeCountries';
import Dimensions from './pages/assignments/Dimensions';

import Assignments from './pages/assignments/Assignments';
// import CheckPhotos from './pages/'; // Obs, this does not exist for now. 

import ResultMasculinity from './pages/assignments/results/ResultMasculinity';
import ResultIndividualism from './pages/assignments/results/ResultIndividualism';
import ResultPowerDistance from './pages/assignments/results/ResultPowerDistance';
import ResultUncertainty from './pages/assignments/results/ResultUncertainty';
import ResultLongTerm from './pages/assignments/results/ResultLongTerm';
import ResultIndulgence from './pages/assignments/results/ResultIndulgence';
  /* Following are existing pages, but that we do not use for now */
import WeeklyAssignments from './pages/user/WeeklyAssignments';
import PhotoMasculinity from './pages/assignments/PhotoMasculinity';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={userWelcome} />
          {/* // */}
          {/* <Route path="/profile" component={userProfile} />     // Obs, this does not exist for now. */}
          <Route path="/study-abroad-info" component={StudyAbroadInfo} />
          <Route path="/startassignments" component={StartAssignments} />
          <Route path="/resultdimensions" component={ResultDimensions} />
          {/* // */}
          <Route path="/homesickness" component={Homesickness} />
          <Route path="/homeuniversitycontact" component={HomeUniContact} />
          <Route path="/exchangeuniversitycontact" component={ExchangeUniContact}/>
          {/* // */}
          <Route path="/hofstede-intro" component={HofstedeIntro} />
          <Route path="/countries" component={HofstedeCountries} />
          <Route path="/dimensions" component={Dimensions} />
          {/* // */}
          <Route path="/assignments" component={Assignments} />
          {/* <Route path="/checkphotos" component={CheckPhotos} /> // Obs, this does not exist for now. */}
          {/* // */}

          <Route path="/resultmasculinity" component={ResultMasculinity} />
          <Route path="/resultIndividualism" component={ResultIndividualism} />
          <Route path="/resultpowerdistance" component={ResultPowerDistance} />
          <Route path="/resultuncertainty" component={ResultUncertainty} />
          <Route path="/resultlongterm" component={ResultLongTerm} />
          <Route path="/resultindulgence" component={ResultIndulgence} />
          {/* // */}
          {/* Following are existing pages, but that we do not use it for now in our project-presentation*/}
          <Route path="/weekassignments" component={WeeklyAssignments} />
          <Route path="/photomasculinity" componenent={PhotoMasculinity} />
        </Switch>
      </div>
    );
  }
}

export default App;
