import Axios from 'axios';
// import qs from 'qs';
var qs = require('qs');
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

const axios = Axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API,
});

export const login = function (username, password) {
  return axios({
    method: 'POST',
    url: '/auth/login',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ username, password }),
  }).then((response) => {
    setUser(response.data);
  });
};

export const signup = (user) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/signup',
    data: user, //qs.stringify(user),
    // data: this.state.user,
    withCredentials: true,
    //headers: { 'content-type': 'application/x-www-form-urlencoded' },
    headers: { 'content-type': 'application/json' },
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

// import Axios from 'axios';
// import qs from 'qs';

// const axiosauth = Axios.create({
//   baseURL: 'http://localhost:3000/user/',
//   withCredentials: true,
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//   },
// });

// export const login = (user) => {
//   return axiosauth({
//     method: 'POST',
//     url: 'login',
//     data: qs.stringify(user),
//   }).then((response) => {
//     if (response.data.user) {
//       setUser(response.data.user);
//     }
//     return response;
//   });
// };

// export const signup = (user) => {
//   return axiosauth({
//     method: 'POST',
//     url: 'signup',
//     data: qs.stringify(user),
//   }).then((response) => {
//     setUser(response.data);
//   });
// };

// export const setUser = (user) => {
//   window.localStorage.setItem('user', JSON.stringify(user));
// };

// export const getUser = () => {
//   return JSON.parse(window.localStorage.getItem('user'));
// };

// export const logout = () => {
//   window.localStorage.removeItem('user');
// };
