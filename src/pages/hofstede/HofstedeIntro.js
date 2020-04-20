import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/General.css';
import '../stylesheets/Hofstede.css';
import '../stylesheets/Result.css';
import '../stylesheets/Assignments.css';

class HofstedeIntro extends Component {
    render() {
        return (
          <div>
            <div>
              <div className="user-header">
                <h2>Assignments Week 6-15</h2>
              </div>
            </div>

            <div className="hofstedeBox">
              <h2 className="HI-header">
                Hofstede's Six Dimensions of Culture
              </h2>
              <p className="HI-text">
                Psychologist Dr Geert Hofstede published his cultural dimensions
                model at the end of the 1970s, based on a decade of research.
                Since then, it's become an internationally recognized standard
                for understanding cultural differences. Hofstede studied people
                who worked for IBM in more than 50 countries. Initially, he
                identified four dimensions that could distinguish one culture
                from another. Later, he added fifth and sixth dimensions, in
                cooperation with Drs Michael H. Bond and Michael Minkov. These
                are:
              </p>
              <ul>
                <li>Power Distance Index (high versus low)</li>
                <li> Individualism Versus Collectivism</li>
                <li> Masculinity Versus Femininity</li>
                <li> Uncertainty Avoidance Index (high versus low)</li>
                <li> Long- Versus Short-Term Orientation</li>
                <li> Indulgence Versus Restraint</li>
              </ul>
              <p className="HILink">
                Want to read more about Hofstede and his dimension?
                <a
                  href="https://www.hofstede-insights.com/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  Click here.
                </a>
              </p>
            </div>

            <div className="btnFooter">
              <Link to="/startassignments">
                <button className="backBtn">Back</button>
              </Link>
              <Link to="/countries">
                <button className="nextBtn">Next</button>
              </Link>
            </div>
          </div>
        );
    }
}

export default HofstedeIntro;
