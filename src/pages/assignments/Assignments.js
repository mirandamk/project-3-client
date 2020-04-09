import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';

class Assignments extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      assignments: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/assignments')
      .then((response) => {
        this.setState({ assignments: response.data });
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  render() {
    let assignments = this.state.assignments;
    return (
      <div>
        <h1>Assignment page</h1>
        <div className="Assignments">
        {assignments.map((assignment) => {
          return (
            <div className="assignment-container">
              <div className="assignment-explanation">
                <h1>{assignment.explanation}</h1>
              </div>
              <div className="assignment-answer">
                <h3>{assignment.answer}</h3>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    ) 
  }
}
      

export default Assignments;