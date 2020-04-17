import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/Dimensions.css';

class Dimensions extends Component {
    render() {
        return (
          <div className="dimensions-container">
              <div className="dimensions-header">
                <h2>Assignment Menu</h2>
              </div>

              <Link to="/assignments" className="icon">
              <div className="dimensions-box">
                <h4>Make an assignment</h4>
              </div>
              </Link>
            
              <Link to="/resultdimensions" className="icon">
              <div className="dimensions-box">
                <h4>Check out your photos</h4>
                </div>
              </Link>
            
              <Link to="/countries" className="icon">
              <div className="dimensions-box">
                <h4>Back</h4>
              </div>
            </Link>

            <div className="dimensions-menu-img">
              <img src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587104810/5e5356129588e0430c7e22d9_peep-38_bw6d30.png" alt="menu"/>
            </div>

          </div>
        );
    }
}

export default Dimensions;
