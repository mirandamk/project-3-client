import React from 'react';
import '../stylesheets/Assignments.css';
import {Link} from 'react-router-dom';

function Homesickness() {
    return (
        <div>
            <div className="assignment-header">
                <h2>What to do with homesickness?</h2>
            </div>
            <div className="assignment-container">
                <img src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587117498/Hofstede%20Countries/peep_p4_dvl8st.png" alt="x"/>
                <p>Sorry to hear that you want to go home.</p>
                <p>Remember, if you go the assignment we are sure you do not wish to go home at all! <Link to="/startassignments"> To the assignment</Link></p>
            </div>
            <Link to="/study-abroad-info">
                <button className="assignment-btn"><p>Back to Study Abroad Menu</p></button>
            </Link>
        </div>
    )
}

export default Homesickness;
