import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/General.css';
import './stylesheets/Home.css';

function Home(){
  return (
          <article className="bg">
              <div className="buttons">
                <button className="signupBtn">
                  <Link to="/signup">SIGN UP</Link>
                </button>
              </div>
              <div className="buttons">
                <button className="loginBtn">
                  <Link to="/login">LOG IN</Link>
                </button>
              </div>
      </article>
  )
}

export default Home;
