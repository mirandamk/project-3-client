import React, { Component } from 'react';
import '../stylesheets/General.css';
import '../stylesheets/Result.css';
// import axios from 'axios';
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

          {/* <div className="btnFooter">
            <Link to="/user">
              <button className="backBtn">Home</button>
            </Link>
          </div> */}
        </article>
      </div>
    );
  }
}
      
export default StudyAbroadInfo;
