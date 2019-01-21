import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
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
    render(){
        let picture = this.state.picture;
        let show;
        if (picture === true) {
            show = <Card className="show">
                <CardContent>
                    <Typography>
                        <span onClick={this.showPicture}><img src={this.props.galleryPic.path} alt="" /></span>
                    </Typography>
                    <Typography>
                        <span>{this.props.galleryPic.likes} people like this photo.</span>
                    </Typography>
                    <CardActions>
                        <Button onClick={this.addLike} variant="outlined" color="primary" className="like">
                            Like</Button>
                    </CardActions>
                </CardContent>
            </Card>
        }
        else {
            show = <Card className="show">
                <CardContent>
                    <Typography >
                        <span onClick={this.showDescription}>{this.props.galleryPic.description}</span>
                    </Typography>
                    <CardActions>
                        <Button onClick={this.addLike} variant="outlined" color="primary" className="like">
                            Like</Button>
                    </CardActions>
                </CardContent>
            </Card>
        }
        return (
            <div className="object" >
                    {show}
                </div>
        ); // end return
    } // end render
} // end class

export default BookListItem;