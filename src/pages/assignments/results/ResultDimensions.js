import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Result.css'

class ResultDimensions extends Component {
  render() {
    return (
      <div className="result-container">
            <div className="result-header">
              <h2>Check out your photos per dimension </h2>
            </div>

            <div className="result-box">
              <Link to="/resultmasculinity" className="icon">
                <h4>Result Masculinity</h4>
              </Link>
            </div>

            <div className="result-box">
              <Link to="/resultIndividualism" className="icon">
                <h4>Result Individualism</h4>
              </Link>
            </div>

            <div className="result-box">
              <Link to="/resultpowerdistance" className="icon">
                <h4>Result Power Distance</h4>
              </Link>
            </div>

            <div className="result-box">
              <Link to="/resultuncertainty" className="icon">
                <h4> Result Uncertainty avoidance</h4>
              </Link>
            </div>

            <div className="result-box">
              <Link to="/resultlongterm" className="icon">
                <h4> Result Long term orientation</h4>
              </Link>
            </div>

            <div className="result-box">
              <Link to="/resultindulgence" className="icon">
                <h4>Result Indulgence</h4>
              </Link>
            </div>

            <div className="result-btn">
             <Link to="/dimensions" className="icon">
                <h4>Assignment Menu</h4>
              </Link>
            </div>

            <div className="result-btn">
             <Link to="/user" className="icon">
               <h4>Home</h4>
             </Link>
            </div>
      </div>
    );
  }
}

export default ResultDimensions;
