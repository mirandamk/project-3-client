import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Assignments.css';

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
      let country = null
      if(this.state.countries.length === 0){
        country = this.state.countries;
      }else {
        country = this.state.countries.find(
        (ctr) => ctr.name === this.props.match.params.name);
      }
    return (
      <div className="CountryDetailBox">
          <h2>{this.props.match.params.name}</h2>
          <img
            src={country.image}
            alt="aint working babe"
            className="countryImg"
          />
      </div>
    );
  }
}

export default CountryDetail;
