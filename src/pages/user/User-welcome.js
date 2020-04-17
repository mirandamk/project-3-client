import React, { Component } from 'react';
import '../stylesheets/General.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class userWelcome extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get(`${process.env.REACT_APP_API}/user`)
  //     .then((response) => {
  //       this.setState({ users: response.data });
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  render() {
    // let users = this.state.users;

    return (
      <div>
        <article className="bg">
          <div className="user-header">
            <h1>Welcome </h1>
            {/* <p>{users.firstname}</p> */}
          </div>

          <div className="welcome-box">
            <div className="icon-card-box">
              <img
                src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587120135/Hofstede%20Countries/peep_p1_q1xdbf.png"
                alt=""
                className="icon-card"
              />
            </div>
            <div>
              <Link to="/profile" className="icon">
                Change profile
              </Link>
            </div>
          </div>

          <div className="welcome-box">
            <div className="icon-card-box">
              <img
                src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587120145/Hofstede%20Countries/icon_earth_g0tvpo.png"
                alt=""
                className="icon-card"
              />
            </div>
            <div>
              <Link to="/study-abroad-info" className="icon">
                Information study abroad
              </Link>
            </div>
          </div>

          <div className="welcome-box">
            <div className="icon-card-box">
              <img
                src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587120158/Hofstede%20Countries/icon_start_mbss6b.png"
                alt=""
                className="icon-card"
              />
            </div>
            <div>
              <Link to="/startassignments" className="icon">
                Start assignments
              </Link>
            </div>
          </div>

          <div className="welcome-box">
            <div className="icon-card-box">
              <img
                src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587120174/Hofstede%20Countries/icon_check_w9nadg.png"
                alt=""
                className="icon-card"
              />
            </div>
            <div>
              <Link to="/resultdimensions" className="icon">
                Check your result
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
    }
}

export default userWelcome;
