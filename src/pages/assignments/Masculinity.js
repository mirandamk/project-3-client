//Note: still need to add upload photo functionality. Shall we use Cloudinary or not?
//Note: need to figure out how to add it to the user._id 

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import service from '../../api/service';
// import Nav from '../components/Nav';
// import './AddBeerFile.css';

class Masculinity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerMasculinity: '',
      masculinityImageUrl: '',
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
    uploadData.append('masculinityImageUrl', e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ masculinityImageUrl: response.secure_url });
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
        <h2>Masculinity</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Description</label>
          <textarea
            type="text"
            name="answerMasculinity"
            value={this.state.answerMasculinity}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button type="submit">Save answer</button>
        </form>
      </div>
    );
  }
}

export default Masculinity;








// //Note: still need to add upload photo functionality. Shall we use Cloudinary or not?
// //Note: need to figure out how to add it to the user._id 

// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import qs from 'qs';
// // import Nav from '../components/Nav';
// // import './AddBeerFile.css';

// class Masculinity extends Component {
//   constructor(props) {
//     super(props);

//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.masculinity = this.masculinity.bind(this);
//   }

//   state = {
//     answerMasculinity: '',
//   };

//   inputChangeHandler(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   masculinity(e) {
//     e.preventDefault();
//     axios({
//       url: 'http://localhost:3000/assignments',
//       data: qs.stringify(this.state),
//       method: 'POST',
//       withCredentials: true
//     })
//       .then(() => {
//         this.props.history.push('/assignments');
//       })
//       .catch((err) => {
//         console.log('Error', err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.masculinity} className="hofstedeForm">
//           <div className="uploadPhotoBox">
//             (info about the take a photo-task and upload photo area) <br></br>Upload
//             photo here
//             <img
//               src="../icons/peep_p3.png"
//               alt=""
//               className="uploadPhotoSize"
//             />
//           </div>
//           <div>
//             <label>
//               In a few words, is this in line with Hofstede’s dimension for the
//               country, or is it be opposite?
//             </label>
//             <textarea
//               type="text"
//               onChange={this.inputChangeHandler}
//               name="answerMasculinity"
//               placeholder="Add your answer"
//               className="textarea"
//             />
//             {/* <label className="custom-file-upload">
//             <input type="file" name="picture" />
//           </label> */}
//             <button type="submit" className="submitBtn">
//               Submit your answer
//             </button>
//           </div>
//         </form>

//         <div className="btnFooter">
//           <Link to="/dimensions">
//             <button className="backBtn">Back to dimensions</button>
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default Masculinity;

//   render() {
//     return (
//       <form onSubmit={this.masculinity}>
//         <input
//           type="text"
//           onChange={this.inputChangeHandler}
//           name="answerMasculinity"
//           placeholder="Add your answer"
//         />
//         {/* <label className="custom-file-upload">
//             <input type="file" name="picture" />
//           </label> */}
//         <button type="submit">Submit your answer</button>
//       </form>
//     );
//   }
// }
// export default Masculinity;