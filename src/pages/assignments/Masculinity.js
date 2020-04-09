import React, { Component } from 'react';
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
      <form onSubmit={this.masculinity}>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          name="answerMasculinity"
          placeholder="Add your answer"
        />
        {/* <label className="custom-file-upload">
            <input type="file" name="picture" />
          </label> */}
        <button type="submit">Submit your answer</button>
      </form>
    );
  }
}

export default Masculinity;
