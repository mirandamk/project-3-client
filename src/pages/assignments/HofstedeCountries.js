import React, { Component } from 'react';
import {Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CountryDetail from './CountryDetail';
import CountryList from './CountryList';
// import qs from 'qs';


class HofstedeCountries extends Component {
    constructor(props) {
        super(props)

        this.state = {
          countries: []
        };
    }
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
                <ul>
                  {countries.map(country => (
                    <CountryList
                      key={country.name}
                      name={country.name}
                      population={country.population}
                    />
                  ))}
                </ul>
                <div>
                  <Switch>
                    <Route path="/countries/:name" component={CountryDetail} />
                  </Switch>
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
