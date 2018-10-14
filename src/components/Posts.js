/**
 * Created by pypyt on 14.10.2018.
 */
import React from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const API = "http://localhost:8080/api/v1/posts";

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {

        axios.get(API).then((response) => this.setState({posts: response.data}))
    }


    render() {

        const {posts} = this.state;

        console.log(posts);
        console.log(posts.length);

        if (posts.length > 0) {
            posts.map(post => console.log(post));

            return posts.map(post => {
                return (
                <Paper elevation={24}>
                        <Grid container spacing={16}>
                            <Grid item>
                                <ButtonBase >
                                    <img alt="complex" src={post.coverPhotoAddress} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h4">
                                            {post.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h5">{post.roomCount} &nbsp; {post.squareMeter}m2 &nbsp; {post.floor}</Typography>
                                        <Typography color="textSecondary" variant="h6">{post.date}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5">{post.price} {post.currency}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </Paper>
                );
            });
        }
        else
            return <p>Loading...</p>
    }
}

export default Posts;