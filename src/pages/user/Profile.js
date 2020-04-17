import React, { Component } from 'react';
import '../stylesheets/General.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
          <article className="bg">
            <div className="user-header">
              <h1>Profile Details</h1>
              {/* <p>{users.firstname}</p> */}
            </div>

            <div className="assignment-container">
                <img src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587123674/Hofstede%20Countries/peep_p3_k2p1pb.png" alt="Your profile picture"/>
                <h3>Full name: </h3>
                <h3>Adress: </h3>
                <h3>Tel: </h3>
                <h3>Home University: </h3>
                <h3>Exchange University: </h3>
            </div>

            <Link to="/user">
              <button className="assignment-btn">
                <p>Back to menu</p>
              </button>
            </Link>
          </article>
        );
    }
}

export default Profile
