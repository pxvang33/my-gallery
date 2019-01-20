import React, {Component} from 'react';
import axios from 'axios';
// are we storing data? if not, don't need constructor
class BookListItem extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         picture: (<img src={this.props.galleryPic.path} alt="" />
    //     }
    // }
    showDescription = () => {
        console.log('in description');

        
    } // end showDescription
    addLike = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${this.props.galleryPic.id}`
        }).then((response)=>{

        }).catch((error)=>{
            console.log('like not working', error);
            
        })

    } // changeLike end
    render(){
        return (<tr>
            <td>{this.props.galleryPic.id}</td>
            {/* 404 error happens when I wrap path in an image tag */}
            <td onClick={this.showDescription}><img src={this.props.galleryPic.path} alt="" /></td>
            <td>{this.props.galleryPic.description}</td>
            <td>{this.props.galleryPic.likes}</td>
            <td><button onClick={this.addLike}>Like</button></td>
        </tr>

        ); // end return
    } // end render
} // end class

export default BookListItem;