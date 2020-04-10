import React, { Component } from 'react';
import '../stylesheets/Users.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class userWelcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/user')
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let users = this.state.users;

    return (
      <div>
        {users.map((user) => {
          return (
            <article className="bg">
              <div className="user-header">
                <h1>Welcome {user.firstName}</h1>
              </div>

              <div className="welcome-box">
                <div className="icon-card-box">
                  <img
                    src="../icons/peep_p1.png"
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
                    src="../icons/icon_earth.png"
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
                    src="../icons/icon_start.png"
                    alt=""
                    className="icon-card"
                  />
                </div>
                <div>
                  <Link to="/assignments" className="icon">
                    Start assignments
                  </Link>
                </div>
              </div>

              <div className="welcome-box">
                <div className="icon-card-box">
                  <img
                    src="../icons/icon_check.png"
                    alt=""
                    className="icon-card"
                  />
                </div>
                <div>
                  <Link to="/result" className="icon">
                    Check your result
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
    }
}

export default userWelcome;