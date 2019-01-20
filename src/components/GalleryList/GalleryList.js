import React, {Component} from 'react';

class GalleryList extends Component {
    appendPics = () => {
        let newGallery = [];
        for (let i = 0; i < this.props.gallery.length; i++) {
            // this.props.gallery.path = <imgr src={this.props.gallery.path} />
            let galleryPic = <tr><td><img src={this.props.gallery[i].path} alt = ""/></td>
                                <td>{this.props.gallery[i].description}</td>
                                <td>{this.props.gallery[i].likes}</td>   
                                </tr>
        newGallery.push(galleryPic)
        }
    return newGallery;
  } //end appendPics
    render(){
        return(
            <table>
                <tbody>
                        {this.appendPics()}
                </tbody>
            </table>
        );
    } // end render
} // end class

export default GalleryList;