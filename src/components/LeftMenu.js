/**
 * Created by pypyt on 15.10.2018.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    postPaper: {
        marginTop: 16,
    },
    postPaperHeader: {
        marginTop: 16,
        backgroundColor: '#f50057',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const roomCountStatics = [
    '1+0', '1+1', '2+1', '3+1', '4+1', '5+',
];

class LeftMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roomCounts: [],
        }
    }


    setRoomCounts = event => {
        this.setState({roomCounts: event.target.value});
        this.props.setRoomCounts(this.state.roomCounts);
    };

    setMinPrice = event => {
        this.props.setMinPrice(event.target.value);
    };

    setMaxPrice = event => {
        this.props.setMaxPrice(event.target.value);
    };


    setMinSquare = event => {
        this.props.setMinSquare(event.target.value);
    };

    setMaxSquare = event => {
        this.props.setMaxSquare(event.target.value);
    };
    render() {

        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid xs={1}>
                    </Grid>
                    <Grid xs={10}>
                        <Paper elevation={24} className={classes.postPaperHeader}>
                            <Typography align={'center'}>Filtrele</Typography>
                        </Paper>
                        <Paper elevation={24} className={classes.postPaper}>
                            <Typography align={'center'}>Fiyata aralığı</Typography>
                            <Grid container spacing={12}>
                                <Grid xs={6}>
                                    <TextField
                                        id="min-price"
                                        label="En düşük"
                                        placeholder="En düşük"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.setMinPrice}
                                        value={this.props.minPrice}
                                    />
                                </Grid>
                                <Grid xs={6}>
                                    <TextField
                                        id="max-price"
                                        label="En yüksek"
                                        placeholder="En yüksek"
                                        className={classes.textField}
                                        onChange={this.setMaxPrice}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={24} className={classes.postPaper}>
                            <Typography align={'center'}>m2 aralığı</Typography>
                            <Grid container spacing={12}>
                                <Grid xs={6}>
                                    <TextField
                                        id="min-m2"
                                        label="En düşük"
                                        placeholder="En düşük"
                                        className={classes.textField}
                                        margin="normal"
                                        onChange={this.setMinSquare}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid xs={6}>
                                    <TextField
                                        id="max-m2"
                                        label="En yüksek"
                                        placeholder="En yüksek"
                                        className={classes.textField}
                                        margin="normal"
                                        onChange={this.setMaxSquare}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={24} className={classes.postPaper}>
                            <Typography align={'center'}>Oda sayısı</Typography>
                            <Grid container spacing={12}>
                                <FormControl className={classes.formControl} align={'center'} fullWidth={true}>
                                    <InputLabel htmlFor="select-multiple-chip"></InputLabel>
                                    <Select
                                        multiple
                                        value={this.props.roomCounts}
                                        onChange={this.setRoomCounts}
                                        input={<Input id="select-multiple-chip"/>}
                                        renderValue={selected => (
                                            <div className={classes.chips}>
                                                {selected.map(value => (
                                                    <Chip key={value} label={value} className={classes.chip}/>
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {roomCountStatics.map(roomCount => (
                                            <MenuItem
                                                key={roomCount}
                                                value={roomCount}
                                            >
                                                {roomCount}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Paper>
                        <Paper elevation={24} className={classes.postPaper}>
                            <Button onClick={this.doFilter} variant="contained" color="secondary"
                                    className={classes.button} fullWidth={true}>
                                Filtrele
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid xs={1}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMenu);