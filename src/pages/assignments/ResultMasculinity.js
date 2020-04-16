//This is a test page. Should be deleted at some point. Now used to check authentication protect

import React, { Component } from 'react';
// import '../stylesheets/Users.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';


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
                <img  src={assignment.image} alt="assignment" />
              </div>
            )
          })}
          </div>
        </div>
      </div>
    )}
        }
        
export default ResultMasculinity;



//             {/* <article className="bg">
//             <div>Hello </div>
//               <div className="user-header">
//             {this.state.description && <h1>{this.state.assignments.description}</h1>}
//               </div>
//             </article> */}
          
        
// //       </div>
// //     );
// //   }
// // }
