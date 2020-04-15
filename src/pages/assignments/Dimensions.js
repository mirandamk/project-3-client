import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dimensions extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
                 
    //     }
    // }

    render() {
        return (
          <div>
            <div>
              <div className="user-header">
                <h2>Assignments Week 6-15</h2>
              </div>
            </div>

            <div className="welcome-box">
              <h1>Assignment explanation.</h1>
            </div>

            <div className="welcome-box">
              <Link to="/masculinity" className="icon">
                <h3>Masculinity</h3>
              </Link>
            </div>

            <div className="welcome-box">
              <Link to="/individualism" className="icon">
                <h3>Individualism</h3>
              </Link>
            </div>

            <div className="welcome-box">
              <Link to="/powerdistance" className="icon">
                <h3>Power distance</h3>
              </Link>
            </div>

            <div className="welcome-box">
              <Link to="/uncertaintyavoidance" className="icon">
                <h3>Uncertainty avoidance</h3>
              </Link>
            </div>

            <div className="welcome-box">
              <Link to="/longtermorientation" className="icon">
                <h3>Long term orientation</h3>
              </Link>
            </div>

            <div className="welcome-box">
              <Link to="/indulgence" className="icon">
                <h3>Indulgence</h3>
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
