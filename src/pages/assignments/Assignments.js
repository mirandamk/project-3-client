//This is a test page. Should be deleted at some point. Now used to check authentication protect

import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { getUser } from '../../utils/auth';
import { Redirect } from 'react-router-dom';


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
      })
      .catch((err) => {
        // check the status code of error, if 403 redirect to login using history.push
        console.log(err)
      });
  }
  render() {
    let user = getUser();
    let assignments = this.state.assignments;
    return (
    <div>
        {!user ? (
          <Redirect to="/login" />
        ) : (
      <div>
        <h1>Assignment page</h1>
            <div className="Assignments">
            {assignments.map((assignment) => {
              return (
                <div className="assignment-container">
                  <div className="assignment-explanation">
                    <h2>{assignment.explanation}</h2>
                  </div>
                  <div className="assignment-answer">
                    <h3>{assignment.answer}</h3>
                  </div>
                  <div className="assignment-masculinity">
                    <h3>{assignment.answerMasculinity}</h3>
                  </div>
                </div>
              )
            }
            )
            }
            </div>
      </div>
       )
       }
    </div>    
    ) 
  }
}
      

export default Assignments;