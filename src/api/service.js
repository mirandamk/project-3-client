// api/service.js

import axios from 'axios';

const service = axios.create({
  baseURL: `${process.env.REACT_APP_API}/assignments`,
  withCredentials: true,
  // => you might need this when having the users in the app
});

const errorHandler = (err) => {
  // console.error(err);
  throw err;
};

export default {
  service,

  handleUpload(theFile) {
    console.log('file in service: ', theFile);
    return service
      .post('/uploadimage', theFile)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  saveAssignment(newAssignment) {
    console.log('new thing is: ', newAssignment);
    return service
      .post('/create', newAssignment)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
