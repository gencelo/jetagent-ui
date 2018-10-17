/**
 * Created by pypyt on 14.10.2018.
 */
import React from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import CalendarToday from '@material-ui/icons/CalendarToday';
import SettingsEthernet from '@material-ui/icons/SettingsEthernet';
import LineWeight from '@material-ui/icons/LineWeight';
import LocalOffer from '@material-ui/icons/LocalOffer';
import LocationCity from '@material-ui/icons/LocationCity';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';


const API = "http://142.93.167.105:8080/api/v1/posts";

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 15,
    },
    pos: {
        marginBottom: 12,
        marginTop: 16,
    },

    postPaper: {
        marginTop: 16,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    progressDiv: {
        align: 'center',
    }
});

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentDidMount() {
        this.callApi(null, null, null, null, null, null);
    }

    componentWillReceiveProps(newProps) {

        this.callApi(newProps.query, newProps.minPrice, newProps.maxPrice, newProps.roomCounts, newProps.minSquare, newProps.maxSquare);
    }


    shouldComponentUpdate(nextProps, nextState) {

        return this.state !== nextState;
    }

    callApi(query, minPrice, maxPrice, roomCounts, minSquare, maxSquare) {
        const {posts} = this.state;

        var roomCountsParams = [], roomCountsParam;

        if (roomCounts) {

            for (var i = 0; i < roomCounts.length; i++) {
                var param = roomCounts[i];
                roomCountsParams.push(param);
            }

            roomCountsParam = roomCountsParams.join("&room_count=");
        }
        else {
            roomCountsParam = undefined;
        }

        axios.get(API, {
            params: {
                q: query,
                min_price: minPrice,
                max_price: maxPrice,
                room_count: roomCountsParam,
                min_square: minSquare,
                max_square: maxSquare,

            }
        }).then((response) => this.setState({posts: response.data}));

    }

    render() {

        const {posts} = this.state;
        const {classes} = this.props;

        if (posts.length > 0) {

            return posts.map(post => {
                return (
                    <Paper elevation={24} className={classes.postPaper}>
                        <Grid container spacing={24}>
                            <Grid item xs={4} container direction="column">
                                <img alt="complex" src={post.coverPhotoAddress} sizes="50%"/>
                            </Grid>
                            <Grid item xs={8} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h4">
                                            {post.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h5">
                                            <LocationCity />{post.location}
                                        </Typography>
                                        <Typography gutterBottom variant="h5"><Home/>{post.roomCount} &nbsp;
                                            <SettingsEthernet/>{post.squareMeter}m2 &nbsp; <LineWeight/>{post.floor}
                                        </Typography>
                                        <Typography color="textSecondary" variant="h6"><CalendarToday/>{post.date}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5"><LocalOffer/>{post.price} {post.currency}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider inset component="Paper"/>
                    </Paper>
                );
            });
        }
        else
            return (
                <div className={classes.root}>
                    <LinearProgress />
                    <br />
                    <LinearProgress color="secondary"/>
                    <br />
                    <LinearProgress
                        classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}
                    />
                </div>

            );
    }
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts);