import React, { Component } from 'react';
import '../stylesheets/General.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class StudyAbroadInfo extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     users: [],
  //   };
  // }
  // componentDidMount() {
  //   axios
  //     .get('http://localhost:3000/user')
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
        {/* {users.map((user) => { */}
        {/* return ( */}
        <article className="bg">
          <div className="welcome-box">
            <div className="icon-card-box">
              {/* <img
                    src="../icons/peep_p1.png"
                    alt=""
                    className="icon-card"
                  /> */}
            </div>
            <div>
              <Link to="/homeunicontact" className="icon">
                Contact details home uni
              </Link>
            </div>
          </div>

          <div className="welcome-box">
            <div className="icon-card-box">
              {/* <img
                    src="../icons/icon_earth.png"
                    alt=""
                    className="icon-card"
                  /> */}
            </div>
            <div>
              <Link to="/homesickness" className="icon">
                What to do with home sickness
              </Link>
            </div>
          </div>

          <div className="welcome-box">
            <div className="icon-card-box">
              {/* <img
                    src="../icons/icon_start.png"
                    alt=""
                    className="icon-card"
                  /> */}
            </div>
            <div>
              <Link to="/exunicontact" className="icon">
                Contact detail/Info about exchange uni
              </Link>
            </div>
          </div>

          <div className="btnFooter">
            <Link to="/user">
              <button className="backBtn">Home</button>
            </Link>
          </div>
        </article>
      </div>
    );
  }
}
      
export default StudyAbroadInfo;
