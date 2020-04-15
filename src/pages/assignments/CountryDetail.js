import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
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
    // let country = this.state.countries.find(
    //   (ctr) => ctr._id === this.props.match.params.name
    // );
     let country = this.state.countries;

    return (
      <div>
        <p>(Text coming from CountryDetail.js,</p>
        <p>Want to show the name of the chosen country from the list )</p>
        <h1>{country.name}</h1>
      </div>
    );
  }
}

export default CountryDetail;
