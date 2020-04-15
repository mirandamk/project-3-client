import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryList extends Component {
  render() {

    return (
      <div>
        <Link to={`/countries/${this.props.name}`}>{this.props.name}</Link>
      </div>
    );
  }
}

export default CountryList;
