import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/countries')
      .then((response) => {
        console.log(response.data);
        this.setState({ countries: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    //   let country = this.state.countries;
    return (
      <div>
        <h1>{this.props.match.params.name}</h1>
        {/* <p>{this.props.match.params.image}</p> */}
      </div>
    );
  }
}

export default CountryDetail;
