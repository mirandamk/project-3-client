// //This file is replaced by User-welcome.js. Should be removed.

// import React, { Component } from 'react';

// class userFirstPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       users: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get('http://localhost:3000/user')
//       .then((response) => {
//         this.setState({ users: response.data });
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }

//   render() {
//     let users = this.state.users;

//     return (
//       <div>
//         {users.map((user) => {
//           return (
//             <>
//               <div>
//                 <h1>Welcome {user.firstName}</h1>
//               </div>

//               <div>
//                 <div>
//                   <figure className="image is-128x128">
//                     <img src=".../icons/peep_p1.png" alt="" />
//                   </figure>
//                 </div>
//                 <div></div>
//               </div>

//               <div>
//                 <div></div>
//                 <div></div>
//               </div>

//               <div>
//                 <div></div>
//                 <div></div>
//               </div>

//               <div>
//                 <div></div>
//                 <div></div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default userFirstPage;
