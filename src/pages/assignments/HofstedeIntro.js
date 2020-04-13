import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HofstedeIntro extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
          <div>
            <div>
              <div className="user-header">
                <h2>Assignments Week 6-15</h2>
              </div>
            </div>

            <div className="hofstedeBox">
              <p>
                Explanation Hofstede’s dimensions + link to website hofstede for
                more info + info assignment
                <br></br>
                Want to read more about Hofstede and his dimension? 
                <a href="https://www.hofstede-insights.com/" target="_blank">
                  Click here.
                </a>
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                cumque inventore officia officiis praesentium autem, esse
                repellat ex, vitae qui numquam expedita debitis. Voluptatem
                facere aliquid accusamus saepe magni sit.
              </p>
            </div>

            <div className="btnFooter">
              <Link to="/weekassignments">
                <button className="backBtn">Back</button>
              </Link>
              <Link to="/dimensions">
                <button className="nextBtn">Next</button>
              </Link>
            </div>
          </div>
        );
    }
}

export default HofstedeIntro;
