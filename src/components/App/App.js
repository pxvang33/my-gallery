import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      gallery: [
        {id: 1, path: <img src="images/goat_small.jpg"/>, description: 'Photo of a goat taken at Glacier National Park.', likes: 0},
      
      ]

    } // end state

  } // end constructor
  render() {
    // for(let i = 0; i < this.state.gallery.length; i++ ){

    // }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <p>{this.state.gallery[0].path}</p>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    ); // end return
  } // end render
} // end class

export default App;
