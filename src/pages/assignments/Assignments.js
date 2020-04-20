// Future plans: when user doesn't add a dimension, have an alert box open up

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Assignments.css';
import service from '../../api/service';

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
    uploadData.append('dimension-image', e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
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
            <option value="power-distance">Power Distance</option>
            <option value="individualism-collectivism">
              Individualism - Collectivism
            </option>
            <option value="masculinity-feminity">Masculinity - Feminity</option>
            <option value="uncertainty-avoidance">Uncertainty Avoidance</option>
            <option value="long-term-orientation">
              Long Term - Short Term Orientation
            </option>
            <option value="indulgence-restraint">
              Indulgence - Restraint
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

