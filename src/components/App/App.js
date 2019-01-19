import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      gallery: [
        {id: 1, path: <img src="images/goat_small.jpg" alt=" "/>, description: 'Photo of a goat taken at Glacier National Park.', likes: 0},
        { id: 2, path: <img src="images/manchester_city.jpg" alt=" "/>, description: 'Welcome to Manchester, entrance to Ethiad Stadium.', likes: 0 }
      
      ] // end this.state.gallery
    } // end state

  } // end constructor
  appendPics = () => {
    let newGallery = [];
    for (let i = 0; i < this.state.gallery.length; i++) {
      let galleryPic = <li>{this.state.gallery[i].path}</li>
      newGallery.push(galleryPic)
    }
    return newGallery;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {/* <p>{this.state.gallery[i].path}</p> */}
        <ul>
          {this.appendPics()}
        </ul>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    ); // end return
  } // end render
} // end class

export default App;
