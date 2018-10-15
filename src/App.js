import React, {Component} from 'react';
import Posts from './components/Posts'
import SearchBar from './components/SearchBar';
import LeftMenu from './components/LeftMenu';
import Grid from '@material-ui/core/Grid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minPrice: null,
            query: null,
            maxPrice: null,
            roomCounts: [],
        };
        this.setMinPrice = this.setMinPrice.bind(this);
        this.setMinSquare = this.setMinSquare.bind(this);
        this.setMaxPrice = this.setMaxPrice.bind(this);
        this.setMaxSquare = this.setMaxSquare.bind(this);
        this.setQuery = this.setQuery.bind(this);
        this.setRoomCounts = this.setRoomCounts.bind(this);

    }

    setMinPrice(input) {
        this.setState({minPrice: input});
    }

    setMaxPrice(input) {
        this.setState({maxPrice: input});
    }

    setQuery(input) {
        this.setState({query: input});
    }

    setRoomCounts(input) {
        this.setState({roomCounts: input});
    }

    setMinSquare(input) {
        this.setState({minSquare: input});
    }

    setMaxSquare(input) {
        this.setState({maxSquare: input});
    }

    render() {
        const {minPrice, query, maxPrice, roomCounts,minSquare, maxSquare} = this.state;

        return (
            <div >
                <SearchBar setQuery={this.setQuery}/>
                <Grid container spacing={24}>
                    <Grid item xs={2}>
                        <LeftMenu setMinPrice={this.setMinPrice} setMaxPrice={this.setMaxPrice}
                                  setRoomCounts={this.setRoomCounts} roomCounts={roomCounts}
                                  setMinSquare={this.setMinSquare} setMaxSquare={this.setMaxSquare}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Posts minPrice={minPrice} query={query} maxPrice={maxPrice} roomCounts={roomCounts}
                                minSquare={minSquare} maxSquare={maxSquare}/>
                    </Grid>
                    <Grid item xs={1}>
                        <div></div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
