import React, {Component} from 'react';
import Posts from './components/Posts'
import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <div >
                <Grid container spacing={12}>
                    <Grid item xs={2}>
                        <div></div>
                    </Grid>
                    <Grid item xs={8}>
                        <Posts />
                    </Grid>
                    <Grid item xs={2}>
                        <div></div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
