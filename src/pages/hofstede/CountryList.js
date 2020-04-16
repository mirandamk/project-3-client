import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Hofstede.css';

class CountryList extends Component {
  render() {
    return (
      <div className="countryListPoints">
        <Link to={`/countries/${this.props.name}`}>{this.props.name}</Link>
      </div>
    );
  }
}
export default CountryList;
