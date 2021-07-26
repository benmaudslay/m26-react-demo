import React, { Component } from "react";
import { Person } from "./components/Person";
import { Job } from "./components/Job";

class App extends Component {
  render () {
    return (
      <div>
        <h1>hi world</h1>
        <Person name="bob" petName="Sir Swimalot" type="Turtle"/>  
        {/* <Job job="Junior Dev" />
        <Job job="Chef" />
        <Job job="Pro Mtb rider" /> */}
      </div>
    )
  }
}


export default App;
