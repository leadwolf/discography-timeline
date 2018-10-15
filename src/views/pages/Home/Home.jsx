import './home.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { operations } from '../../../state/artists';
import { ArtistList } from '../../components/Artists';
import { CenterInfo } from '../../components/general/CenterInfo/CenterInfo';
import { Search } from '../../components/Search';
import Typography from '@material-ui/core/Typography';

const debounce = require('lodash.debounce');

class Home extends Component {
    static propTypes = {};

    state = {
        value: '',
    };

    debouncedSearch = debounce(this.props.search, 400, { leading: true });

    handleChange = e => {
        this.setState({ value: e.target.value });
        this.debouncedSearch(e.target.value);
    };

    render() {
        const { value } = this.state;
        const {
            artists: { items, total, offset },
            loadMore,
        } = this.props;

        const hasMore = items.length + offset < total;

        return (
            <div className="page-home-container">
                <div>
                    <Search value={value} handleChange={this.handleChange} />
                </div>
                <div className="page-home-content-container">
                    {items.length > 0 && (
                        <ArtistList loadMore={loadMore} hasMore={hasMore} artists={items} />
                    )}
                    {items.length === 0 && (
                        <CenterInfo>
                            <Typography>
                                {value && 'No results were found'}
                                {!value && 'Enter a search term'}
                            </Typography>
                        </CenterInfo>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists,
});

const mapDispatchToProps = dispatch => ({
    search: query => dispatch(operations.search(query)),
    loadMore: () => dispatch(operations.loadMore()),
});

const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export { Home, ConnectedHome };
