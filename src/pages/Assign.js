import React, { Component } from 'react';
import axios from 'axios';

class Assign extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 assignments: [],
        }
    }

    componentDidMount(){
        debugger
         axios
           .get('http://localhost:3000/assignment')
           .then((response) => {
             this.setState({ assignments: response.data });
             console.log(response.data);
           })
           .catch((err) => {
             console.log(err);
           });
    }

    render() {
        let assigns = this.state.assignments;
        return (
          <div className="App">
            <p>Hey, you are in assign page</p>
            {assigns.map((assign) => {
              return <h1>{assign.explanation}</h1>;
            })}
          </div>
        );
    }
}

export default Assign;
