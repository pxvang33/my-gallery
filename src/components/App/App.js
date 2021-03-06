import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './../GalleryList/GalleryList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gallery: [
        {id: 1, path: <img src="images/goat_small.jpg" alt=" "/>, description: 'Photo of a goat taken at Glacier National Park.', likes: 0},
        { id: 2, path: <img src="images/manchester_city.jpg" alt=" "/>, description: 'Welcome to Manchester, entrance to Ethiad Stadium.', likes: 0 },
      ] 
    } // end state
  } // end constructor

  // need this life cycle method to reset local state to data from server
  componentDidMount() {
  this.getGallery();
  } // end componentDidMount

  getGallery = () => {
    // using axios to get gallery.data information from server
    // data is in a GET route in gallery.router
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response)=>{
      console.log('in response getGallery', response)
      this.setState({
        gallery: response.data,
      })
    }).catch((error)=>{
      console.log('error in getGallery', error);
      alert('did not get data/response from server')
    })
  } // end getGallery

  render() {
    return (

        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Peng Xue Vang Gallery</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery} getGallery={this.getGallery}/>
        </div>

    ); // end return
  } // end render
} // end class

export default App;
