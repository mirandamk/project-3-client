// api/service.js

import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3000/assignments',
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
      .post('/upload', theFile)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  saveAssignment(newAssignment) {
    console.log('new thing is: ', newAssignment);
    return service
      .post('/save', newAssignment)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
