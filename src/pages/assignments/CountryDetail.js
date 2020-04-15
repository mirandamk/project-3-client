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
        this.setState({ countries: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
             debugger;
             // const countryDetailInfo = {
             //   width: '70%',
             // };
            //  let countries = this.state.countries.find( (ctr) => ctr._id === this.props.match.params._id);
            //  let countries = this.state.countries;

             return (
               <div class="col-7">
                 {/* <h1>{countries.name}</h1> */}
                     <div>
                       {/* {countries.map((country) => ( */}
                       {/* <p>{country.name}</p> */}
                       {/* ))} */}
                     </div>
                     <div>
                       {/* {theCountry.borders.map((country, index) => (
                         <p>
                           <Link to={`/country-detail/${country}`}>
                             {country}
                           </Link>
                         </p>
                       ))} */}
                     </div>
               </div>
             );
           }
}

export default CountryDetail;
