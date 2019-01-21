import React, {Component} from 'react';
import axios from 'axios';
// are we storing data? if not, don't need constructor
class BookListItem extends Component {
    constructor () {
        super();
        this.state = {
            picture: true,
        };

    } // end constructor
    showPicture = () => {
        console.log('in picture');
        this.setState({
            picture: false,
        })
    }
    showDescription = () => {
        console.log('in description');
        this.setState({
            picture: true,
        })  
    } // end showDescription
    addLike = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${this.props.galleryPic.id}`
        }).then((response)=>{
            this.props.getGallery();

        }).catch((error)=>{
            console.log('like not working', error);
            
        })
    } // changeLike end
    render(){
        let picture = this.state.picture;
        let show;
        if (picture === true){
            show = <td className="object" onClick={this.showPicture}><img src={this.props.galleryPic.path} alt="" /></td>
        }
        else{
            show = <td className="object" onClick={this.showDescription}>{this.props.galleryPic.description}</td>
        }
        return (<tr className="object">
            {/* <td>{this.props.galleryPic.id}</td> */}
            {/* 404 error happens when I wrap path in an image tag */}
            {/* <td onClick={this.showDescription}><img src={this.props.galleryPic.path} alt="" /></td> */}
            {/* <td>{this.props.galleryPic.description}</td> */}
            {show}
            <td>{this.props.galleryPic.likes}</td>
            <td><button onClick={this.addLike}>Like</button></td>
        </tr>

        ); // end return
    } // end render
} // end class

export default BookListItem;