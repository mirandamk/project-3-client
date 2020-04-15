import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';
import axios from 'axios';
import CountryDetail from './CountryDetail';
import CountryList from './CountryList';
// import qs from 'qs';


class HofstedeCountries extends Component {
    constructor(props) {
        super(props)

        this.state = {
        //   value: 'select',
          countries: []
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event){
    //     this.setState({value: event.target.value});
    // }
    // handleSubmit(event, req, res){
    //     alert(this.state.value);
    //     res.send('./CountryDetail')
    //     // preventDefault();
    // }
componentDidMount(){
    axios
        .get('http://localhost:3000/countries')
        .then((response) => {
            this.setState({ countries: response.data });
        })
        .catch((err) => {
            console.log(err);
        });
}

    render() {
        let countries = this.state.countries;
        return (
          <div>
            <div>
              <div className="user-header">
                <h2>Assignments Week 6-15</h2>
              </div>
            </div>
            <div>
              <div className="hofstedeBox">
                {/* <form onSubmit={this.handleSubmit}>
                  <label>
                    Choose country:
                    <select
                      name="country"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option value="Select">Select</option>
                      <option value="Greece">Greece</option>
                      <option value="Great Britan">Great Britan</option>
                      <option value="Italy">Italy</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Sweden">Sweden</option>
                      <option value="United States">United States</option>
                    </select>
                  </label>
                  <input type="submit" value="Submit" />
                </form> */}
                <ul>
                  <li>
                      (List from original running spa
                      HofstedeCountries.js)
                  </li>
                  {countries.map((country, index) => (
                    <CountryList
                    key={index}
                    name={country.name}
                    population={country.population}
                    />
                  ))}
                </ul>
                <div>
                  <Route path="/countries/:name" component={CountryDetail} />
                </div>
              </div>
            </div>

            <div className="btnFooter">
              <Link to="/hofstede-intro">
                <button className="backBtn">Back</button>
              </Link>
              <Link to="/dimensions">
                <button className="nextBtn">Cont to H's dimensions</button>
              </Link>
            </div>
          </div>
        );
    }
}

export default HofstedeCountries;
