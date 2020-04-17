import React from 'react';
import '../stylesheets/Assignments.css';
import { Link } from 'react-router-dom';

function HomeUniContact() {
    return (
      <div>
        <div className="assignment-header">
          <h2>Home University Contact Details</h2>
        </div>
        <div className="assignment-container">
          <img
            src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587118293/Hofstede%20Countries/icon_grad_student_gdjvic.png"
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

export default HomeUniContact;
