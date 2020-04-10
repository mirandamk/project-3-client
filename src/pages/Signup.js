import React, { Component } from 'react';
// import './App.css';
// import {signup} from '../utils/auth.js';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }
     
    state = {
      user: {
          firstName: "",
          lastName: "",
          ice:{
              name: "",
              tel_nr: 0,
              email: "",
          },
          home_uni: "",
          exchange_uni: "",
          password: "",
          email: "",
          tel_nr: "",
          address: {
              street: "",
              postal_code: "",
            },
            error: null
        }
    };
  render() {
    // let users = this.state.users;
    return (
            <form>
                <div>
                    <label>Name</label>
                    <div>
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </div>
                </div>

                <div>
                    <label>ICE Contact</label>
                    <div>
                        <input type="text" value={this.state.ice.name} onChange={this.handleChange} name="ice.name"/>
                        <input type="number" value={this.state.ice.tel_nr} onChange={this.handleChange} name="ice.tel_nr"/>
                        <input type="text" value={this.state.ice.email} onChange={this.handleChange} name="ice.name"/>
                    </div>
                </div>
                
                <div>
                    <label>Home University</label>
                    <div>
                        <input type="text" value={this.state.home_uni} onChange={this.handleChange} name="home_uni"/>
                    </div>
                </div>

                <div>
                    <label>Exchange University</label>
                    <div>
                        <input type="text" value={this.state.exchange_uni} onChange={this.handleChange} name="exchange_uni"/>
                    </div>
                </div>

                <div>
                    <label>Address abroad</label>
                    <div>
                        <input type="text" value={this.state.address.street} onChange={this.handleChange} name="address.street"/>
                        <input type="text" value={this.state.address.postal_code} onChange={this.handleChange} name="address.postal_code"/>
                    </div>
                </div>

                <div>
                    <label>E-mail address</label>
                    <div>
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </div>
                </div>

                <div>
                    <label>Telephone</label>
                    <div>
                        <input type="text" value={this.state.tel_nr} onChange={this.handleChange} name="tel_nr"/>
                    </div>
                </div>

                <div>
                    <label>Password</label>
                    <div>
                        <input type="text" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </div>
                </div>

                <div>
                    <button onClick={this.handleSubmitClick}>Signup your account</button>
                </div>

                <div>
                    {this.state.error && (
                        <>
                            <p>{this.state.error.message || 'error'}</p>
                            <p>Try again!</p>
                        </>
                    )}
                </div>
            </form>
    )
  }
}


// export default User;