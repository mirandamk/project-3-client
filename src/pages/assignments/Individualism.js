// import React, { Component } from 'react';
// import axios from 'axios';
// import qs from 'qs';
// // import Nav from '../components/Nav';
// // import './AddBeerFile.css';

// class Individualism extends Component {
//   constructor(props) {
//     super(props);

//     this.inputChangeHandler = this.inputChangeHandler.bind(this);
//     this.individualism = this.individualism.bind(this);
//   }

//   state = {
//     answerIndividualism: "",
//   };

//   inputChangeHandler(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   individualism(e) {
//     e.preventDefault();
//     axios({
//       url: 'http://localhost:3000/assignments',
//       data: qs.stringify(this.state),
//       method: 'POST',
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
//       <form onSubmit={this.individualism}>
//         <input
//           type="text"
//           onChange={this.inputChangeHandler}
//           name="answerIndividualism"
//           placeholder="Add your answer indi"
//         />
//         <button type="submit">Submit your answer</button>
//       </form>
//     );
//   }
// }

// export default Individualism;
