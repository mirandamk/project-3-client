import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/General.css';

class Dimensions extends Component {
    render() {
        return (
          <div>
            <div>
              <div className="user-header">
                <h2>Assignment Menu</h2>
              </div>
            </div>

            <div className="welcome-box">
              <h1>Now, it is time for you to get to work. </h1>
            </div>

            <div className="welcome-box">
              <Link to="/assignments" className="icon">
                <h3>Make an assignment</h3>
              </Link>
            </div>

            {/* <div className="welcome-box">
              <Link to="/" className="icon">
                <h3>Check out your photos</h3>
              </Link>
            </div> */}

            <div className="welcome-box">
              <Link to="/resultdimensions" className="icon">
                <h3>Check out you photos</h3>
              </Link>
            </div>

            <div className="btnFooter">
              <Link to="/countries">
                <button className="backBtn">Back</button>
              </Link>
            </div>
          </div>
        );
    }
}

export default Dimensions;
