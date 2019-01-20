import React, {Component} from 'react';

class BookListItem extends Component {
    render(){
        return (<tr>
            <td>{this.props.galleryPic.id}</td>
            <td><img src={this.props.galleryPic.path} alt="" /></td>
            <td>{this.props.galleryPic.description}</td>
            <td>{this.props.galleryPic.likes}</td>
        </tr>

        ); // end return
    } // end render
} // end class

export default BookListItem;