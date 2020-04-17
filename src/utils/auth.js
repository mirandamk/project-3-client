//Note: copied from Jurgen and the Beer API assignment. Not entirely sure what is doing what. 

import Axios from 'axios';
import qs from 'qs';
// var qs = require('qs');
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

const axios = Axios.create({
  withCredentials: true,
  // baseURL: process.env.REACT_APP_API,
});

export const login = function (user) {
  return axios({
    method: 'POST',
    url: `${process.env.REACT_APP_API}/login`,
    data: qs.stringify(user),
     headers: { 'content-type': 'application/x-www-form-urlencoded'}, 
    //data: user,
    // headers: { 'content-type': 'application/json' },
    withCredentials: true,
  }).then((response) => {
    setUser(response.data);
  });
};

export const signup = (user) => {
  return axios({
    method: 'POST',
    url: `${process.env.REACT_APP_API}/signup`,
    data: qs.stringify(user),
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    withCredentials: true,
    //data: user, 
    
    // data: this.state.user,
    
    
    //headers: { 'content-type': 'application/json' },
  }).then((response) => {
    setUser(response.data);
  });
};

// export const loggedIn = function () {
//   const user = getUser();
//   return !!user;
// };

export const setUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('user'));
};

// export const logout = function () {
//   return axios({
//     url: '/auth/logout',
//   }).then((res) => {
//     debugger;
//     localStorage.removeItem('user');
//     history.push('/home');
//   });
// };