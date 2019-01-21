import React, {Component} from 'react';
import GalleryListItem from './GalleryListItem';

class GalleryList extends Component {
    appendPics = () => {
        let newGallery = [];
        for (let i = 0; i < this.props.gallery.length; i++) {
            let galleryPic = this.props.gallery[i];
            let galleryRow = (<GalleryListItem key={i} galleryPic={galleryPic} getGallery={this.props.getGallery}/>)
            newGallery.push(galleryRow)
        }
    return newGallery;
  } //end appendPics
    render(){
        return(
            <div>
                {this.appendPics()}
            </div>
        );
    } // end render
} // end class

export default GalleryList;