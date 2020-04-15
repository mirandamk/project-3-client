import React, { Component } from 'react';
import {Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CountryDetail from './CountryDetail';
import CountryList from './CountryList';
import '../stylesheets/Assignments.css';

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

            <div className="hofstedeCountryBox">
              <div className="countryList">
                <h3 className="countryListHeader">Choose country:</h3>
                {countries.map((country) => (
                  <CountryList
                    key={country.name}
                    name={country.name}
                    population={country.population}
                  />
                ))}
              </div>

              <div>
                <Switch>
                  <Route path="/countries/:name" component={CountryDetail} />
                </Switch>
              </div>


                <img src="../icons/peep_w6.png" alt="x" className="HCPeep"/>

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
