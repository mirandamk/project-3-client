import React, { Component } from 'react';
import '../stylesheets/Assignments.css';
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

        {/* <div className="test">
          <img src="../icons/peep_w1.png" alt="" className="WAPeep" />
        </div> */}

        <div className="WAInfoFrame">
          <img src="../icons/peep_w1.png" alt="" className="WAPeep" />

          <p className="WApara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempora, ad molestiae doloremque neque explicabo laudantium unde
            illo assumenda ex nemo doloribus reprehenderit similique
            voluptatibus, perferendis voluptatum, earum magni eius.<br></br>{' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempora, ad molestiae doloremque neque explicabo laudantium unde
            illo assumenda ex nemo doloribus reprehenderit similique
            voluptatibus, perferendis voluptatum, earum magni eius. <br></br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempora, ad molestiae doloremque neque explicabo laudantium unde
            illo assumenda ex nemo doloribus reprehenderit similique
            voluptatibus, perferendis voluptatum, earum magni eius.
          </p>
        </div>

        <div className="btnFooter">
          <Link to="/user">
            <button className="backBtn">
              Home // obs place this button later so it fits somewhere logical. Or should have at all?
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
