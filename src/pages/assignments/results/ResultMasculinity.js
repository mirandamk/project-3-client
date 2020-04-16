import React, { Component } from 'react';
import './Result.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ResultMasculinity extends Component {
  constructor(props) {
    super(props);

  this.state = {
      assignments: [],
    }
  }

  componentDidMount() {
    axios({withCredentials: true,
      method: 'GET',
      url: 'http://localhost:3000/results/masculinity-feminity' })
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
      <div className="result-container">
          <div className="result-header">
            <h2>Results Masculinity - Femininity</h2>
          </div>
          <div className="result-body">
            {assignments.map((assignment) => {
              return (
                <>
                <div className="result-image">
                  <img src={assignment.image} alt="assignment" />
                </div>
                
                <div className="result-answer">
                  <h4>How does this relate to the dimension {assignment.dimension}?</h4>
                  <p>{assignment.description}</p>
                </div> 
                </>               
              )
            })}        
          </div>
        <Link to="/dimensions">
          <button className="dimensionsBtn">Back to dimensions menu</button>
        </Link>
      </div>
    )
  }
  }
        
export default ResultMasculinity;
