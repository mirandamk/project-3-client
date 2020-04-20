import React, { Component } from 'react';
import '../stylesheets/General.css';
import '../stylesheets/Result.css';

import { Link } from 'react-router-dom';

class StudyAbroadInfo extends Component {

  render() {

    return (
      <div>
        <article className="bg">
          <div className="welcome-box">
            <div className="icon-card-box"></div>
            <div>
              <Link to="/homesickness" className="icon">
                Home sick?
              </Link>
            </div>
          </div>
          <div className="welcome-box">
            <div className="icon-card-box"></div>
            <div>
              <Link to="/homeuniversitycontact" className="icon">
                Home University Contacts
              </Link>
            </div>
          </div>

          <div className="welcome-box">
            <div className="icon-card-box"></div>
            <div>
              <Link to="/exchangeuniversitycontact" className="icon">
                Exchange University Contacts
              </Link>
            </div>
          </div>
          <div className="result-btn">
            <Link to="/user" className="icon">
              <h4>Home</h4>
            </Link>
          </div>
        </article>
      </div>
    );
  }
}
      
export default StudyAbroadInfo;
