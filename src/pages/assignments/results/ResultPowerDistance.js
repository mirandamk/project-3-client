import React, { Component } from 'react';
// import '../stylesheets/Users.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';


class ResultPowerDistance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignments: [],
    }
  }

  componentDidMount() {
    axios({
      withCredentials: true,
      method: 'GET',
      url: 'http://localhost:3000/results/power-distance'
    })
      .then((response) => {
        this.setState({ assignments: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    let assignments = this.state.assignments;

    return (
      <div>
        <h5>Text at the top</h5>

        <div>
          <h5>See Result Masculinity</h5>
          <div className="result-mas">
            {assignments.map((assignment) => {
              return (
                <div>
                  <h5>{assignment.description}</h5>

                  <p>{assignment.dimension}</p>
                  <img src={assignment.image} alt="assignment" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ResultPowerDistance;