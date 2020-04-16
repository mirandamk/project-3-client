import React, { Component } from 'react';
import '../stylesheets/user/Welcome-Assignment.css';
import '../stylesheets/General.css';
import {Link} from 'react-router-dom';
// import WeeklyAssignments from './WeeklyAssignments';

class WelcomeAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="WABackground">
        <div className="WAHeader">
          <h2>Time to start doing</h2>
        </div>

        <div className="WAInfoFrame">
          <img src="../icons/peep_w1.png" alt="" className="WAPeep" />

          <div className="WApara">
            <h3 className="intercultural-info">"Wait, stop, what? What are they doing!?"</h3>

            <p className="intercultural-info">You have probably already noticed some, in you opinion, weird things that people around you have done. No? Then you are probably living under a rock. Don't be a starfish and come out of the water and play, honey. <h5 className="intercultural-qoute">The world is beautiful!</h5> </p>
            <p className="intercultural-info">Intercultural shock, they say. What is that? And how should you react when you see the person in front of you burp straight out in the air, when a group of people kissing each other on the cheek to greet or when people do absolutely not want to speak with you when waiting for the bus and keeps the distance of at least 2 metres away from you?</p>
            <p className="intercultural-info">Well, intercultural differencies can be tricky to handle if you are not prepared for what might be coming when you go abroad for studies and will meet multiple cultures at once. It will create conflicts at some point, for sure. </p>
            <p className="intercultural-info">With the help of Hofstede's six dimensions you can prepare yourself by checking where your current exchange location are in these dimensions. With the assignments you are going to learn, understand, reflect and analyze different situations you will experience during your exchange semester.</p>
            <p className="intercultural-info">You are going to learn how you can communicate with people from all over the world, with the help of Hofstede's six dimensions.</p>
            <h3 className="intercultural-info">Are you ready? </h3>
            <p className="intercultural-info">It is now time for you to crawl out from your cave and deal with the real world, baby!</p>
          </div>
        </div>

        <div className="btnFooter">
          <Link to="/user">
            <button className="WABackBtn">
              Home
            </button>
          </Link>
        </div>

        <Link to="/weekassignments">
          <button className="WABtn">Continue to weekly assignments</button>
        </Link>
      </div>
    );
  }
}

export default WelcomeAssignment;
