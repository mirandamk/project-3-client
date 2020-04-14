//Note: still need to add upload photo functionality. Shall we use Cloudinary or not?
//Note: need to figure out how to add it to the user._id 

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
// import Nav from '../components/Nav';
// import './AddBeerFile.css';

class Masculinity extends Component {
  constructor(props) {
    super(props);

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.masculinity = this.masculinity.bind(this);
  }

  state = {
    answerMasculinity: '',
  };

  inputChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  masculinity(e) {
    e.preventDefault();
    axios({
      url: 'http://localhost:3000/assignments',
      data: qs.stringify(this.state),
      method: 'POST',
      withCredentials: true
    })
      .then(() => {
        this.props.history.push('/assignments');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.masculinity} className="hofstedeForm">
          <div className="uploadPhotoBox">
            (info about the take a photo-task and upload photo area) <br></br>Upload
            photo here
            <img
              src="../icons/peep_p3.png"
              alt=""
              className="uploadPhotoSize"
            />
          </div>
          <div>
            <label>
              In a few words, is this in line with Hofstede’s dimension for the
              country, or is it be opposite?
            </label>
            <textarea
              type="text"
              onChange={this.inputChangeHandler}
              name="answerMasculinity"
              placeholder="Add your answer"
              className="textarea"
            />
            {/* <label className="custom-file-upload">
            <input type="file" name="picture" />
          </label> */}
            <button type="submit" className="submitBtn">
              Submit your answer
            </button>
          </div>
        </form>

        <div className="btnFooter">
          <Link to="/dimensions">
            <button className="backBtn">Back to dimensions</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Masculinity;

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