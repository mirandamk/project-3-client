import React from 'react';
import '../stylesheets/Assignments.css';
import { Link } from 'react-router-dom';

function ExchangeUniContact() {
  return (
    <div>
      <div className="assignment-header">
        <h2>Exchange University</h2>
      </div>
      <div className="assignment-container">
        <img
          src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587118632/Hofstede%20Countries/peep_p5_rlbvq2.png"
          alt="x"
        />
        <h4>Contact details:</h4>
        <h3>Adress: </h3>
        <h3>Tel: </h3>
        <h3>Good to know: </h3>
      </div>
      <Link to="/study-abroad-info">
        <button className="assignment-btn">
          <p>Back to Study Abroad Menu</p>
        </button>
      </Link>
    </div>
  );
}

export default ExchangeUniContact;
