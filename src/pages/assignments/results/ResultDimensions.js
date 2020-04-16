import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ResultDimensions extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="user-header">
            <h2>Assignments Week 6-15</h2>
          </div>
        </div>

        <div className="welcome-box">
          <h1>Here you can find all of your results per dimension </h1>
        </div>

        <div className="welcome-box">
          <Link to="/resultmasculinity" className="icon">
            <h3>Result Masculinity</h3>
          </Link>
        </div>

        <div className="welcome-box">
          <Link to="/resultIndividualism" className="icon">
            <h3>Result Individualism</h3>
          </Link>
        </div>

        <div className="welcome-box">
          <Link to="/resultpowerdistance" className="icon">
            <h3>Result Power Distance</h3>
          </Link>
        </div>

        <div className="welcome-box">
          <Link to="/resultuncertainty" className="icon">
            <h3> Result Uncertainty avoidance</h3>
          </Link>
        </div>

        <div className="welcome-box">
          <Link to="/resultlongterm" className="icon">
            <h3> Result Long term orientation</h3>
          </Link>
        </div>

        <div className="welcome-box">
          <Link to="/resultindulgence" className="icon">
            <h3>Result Indulgence</h3>
          </Link>
        </div>

        <div className="btnFooter">
        <div>
          <Link to="/dimensions">
            <button className="backBtn">To Dimension Menu(, obs fix these buttons)</button>
          </Link>
        </div>
        <div>
          <Link to="/user">
              <button className="backBtn">Go Home (, obs fix these buttons)</button>
          </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default ResultDimensions;
