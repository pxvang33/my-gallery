import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
        showLikes = () => {
        if (this.props.galleryPic.likes === 0) {
            return 'Be the first person to like this!'
        }
        else if (this.props.galleryPic.likes === 1) {
            return 'One person liked this.'
        }
        else {
            return `${this.props.galleryPic.likes} people liked this.`
        }
    }
    render(){
        let picture = this.state.picture;
        let show;
        if (picture === true) {
            show =(                       
                 <span onClick={this.showPicture}><img src={this.props.galleryPic.path} alt="" /></span>
            )
        }
        else {
            show = (
                 <span onClick={this.showDescription}>{this.props.galleryPic.description}</span>
            )
        }
        return (
                <div className="object" >
                    <Card className="show">
                        <CardContent>
                            <Typography >
                                {show}
                            </Typography>
                            <Typography >
                               {this.showLikes()}
                            </Typography>
                            <CardActions>
                                <Button onClick={this.addLike} variant="outlined" color="primary" className="like">
                                    Like</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
        ); // end return
    } // end render
} // end class

export default BookListItem;