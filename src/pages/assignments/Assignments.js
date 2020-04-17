//Note: still need to add upload photo functionality. Shall we use Cloudinary or not?
//Note: need to figure out how to add it to the user._id
// when user doesn't add a dimension, have an alert box open up

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Assignments.css';
// import axios from 'axios';
// import qs from 'qs';
import service from '../../api/service';
// import Nav from '../components/Nav';


class Assignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimension: '',
      description: '',
      image: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = (e) => {
    console.log('The file to be uploaded is: ', e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('dimension-image', e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ image: response });
      })
      .catch((err) => {
        console.log('Error while uploading the file: ', err);
      });
  };

  // this method submits the form
  handleSubmit = (e) => {
    e.preventDefault();
    service
      .saveAssignment(this.state)
      .then((res) => {
        console.log('added: ', res);
        // here you would redirect to some other page
      })
      .catch((err) => {
        console.log('Error while adding the thing: ', err);
      });
  };

  render() {
    return (
      <div>
        <div className="assignment-header">
          <h2>Assignment</h2>
        </div>
        <div className="assignment-container">
          <img src="https://res.cloudinary.com/dsuhcbmxk/image/upload/v1587064405/5e535ac97371bbe53aa0f8c0_peep-78_1_small_ey9n1l.png" alt="assignment"/>        
          <p>Take a photo for each of the six dimensions in your new home country</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select
            className="assignment-select"
            onChange={(e) => this.handleChange(e)}
            name="dimension"
            default
            value={this.state.dimension}
          >
            <option>Choose a dimension</option>
            <option value="power-distance">Power-distance</option>
            <option value="individualism-collectivism">
              Individualism-collectivism
            </option>
            <option value="masculinity-feminity">masculinity-feminity</option>
            <option value="uncertainty avoidance">uncertainty avoidance</option>
            <option value="long term - short term orientation">
              long term - short term orientation
            </option>
            <option value="indulgence - restraint">
              indulgence - restraint
            </option>
          </select>

          <input
            className="assignment-image"
            type="file"
            name="dimension-image"
            onChange={(e) => this.handleFileUpload(e)}
          />

            <label className="assignment-description"><p>In a few words, how is this photo related to the dimension? Is it in line with Hofstede's value for your new home country?</p></label>
          <textarea
          className="assignment-textbox"
              placeholder="add your answer here"
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
         
            <button className="assignment-btn" type="submit"><p>Save answer</p></button>
        </form>

          <Link to="/resultdimensions">
            <button className="assignment-btn"><p>Check out your photos</p></button>
          </Link>
        
        <Link to="/dimensions">
            <button className="assignment-btn"><p>Back to dimensions menu</p></button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Assignment;



// //This is a test page. Should be deleted at some point. Now used to check authentication protect

// import React, { Component } from 'react';
// // import './App.css';
// import axios from 'axios';
// import { getUser } from '../../utils/auth';
// import { Redirect } from 'react-router-dom';


// class Assignments extends Component {
//   constructor(props) {
//     super(props);
      
//     this.state = {
//       assignments: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get('http://localhost:3000/assignments')
//       .then((response) => {
//         this.setState({ assignments: response.data });
//       })
//       .catch((err) => {
//         // check the status code of error, if 403 redirect to login using history.push
//         console.log(err)
//       });
//   }
//   render() {
//     let user = getUser();
//     let assignments = this.state.assignments;
//     return (
//     <div>
//         {!user ? (
//           <Redirect to="/login" />
//         ) : (
//       <div>
//         <h1>Assignment page</h1>
//             <div className="Assignments">
//             {assignments.map((assignment) => {
//               return (
//                 <div className="assignment-container">
//                   <div className="assignment-explanation">
//                     <h2>{assignment.explanation}</h2>
//                   </div>
//                   <div className="assignment-answer">
//                     <h3>{assignment.answer}</h3>
//                   </div>
//                   <div className="assignment-masculinity">
//                     <h3>{assignment.answerMasculinity}</h3>
//                   </div>
//                 </div>
//               )
//             }
//             )
//             }
//             </div>
//       </div>
//        )
//        }
//     </div>    
//     ) 
//   }
// }
      

// export default Assignments;