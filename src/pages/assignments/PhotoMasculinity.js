// //Note: still need to add upload photo functionality. Shall we use Cloudinary or not?
// //Note

// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import qs from 'qs';
// // import Nav from '../components/Nav';
// // import './AddBeerFile.css';

// class PhotoMasculinity extends Component {
//   constructor(props) {
//     super(props);

//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.photomasculinity = this.photomasculinity.bind(this);
//   }

//   state = {
//     photoMasculinity: '',
//   };

//   inputChangeHandler(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   photomasculinity(e) {
//     e.preventDefault();
//     axios({
//       url: 'http://localhost:3000/assignments',
//       data: qs.stringify(this.state),
//       method: 'POST',
//       withCredentials: true
//     })
//       .then(() => {
//         this.props.history.push('/masculinity');
//       })
//       .catch((err) => {
//         console.log('Error', err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.photomasculinity} className="hofstedeForm">
//           <label className="uploadPhotoBox">
//             <input 
//             type="file" 
//             onChange={this.inputChangeHandler}
//             name="photoMasculinity"              
//             />
//           </label>
//             <button type="submit" className="submitBtn">
//               Submit your photo
//             </button>
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

// export default PhotoMasculinity;
