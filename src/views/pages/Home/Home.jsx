import './home.scss';

import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions, operations } from '../../../state/artists';
import { ArtistList } from '../../components/Artists';
import { CenterInfo } from '../../components/general/CenterInfo/CenterInfo';
import { Search } from '../../components/Search';

const debounce = require('lodash.debounce');

class Home extends Component {
    static propTypes = {};

    state = {
        value: '',
    };

    debouncedSearch = debounce(this.props.search, 400, { leading: true });

    handleChange = e => {
        const {
            target: { value },
        } = e;
        const { clearSearch } = this.props;

        this.setState({ value });
        if (value) {
            this.debouncedSearch(value);
        } else {
            clearSearch();
        }
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
    clearSearch: () => dispatch(actions.clearSearch()),
});

const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export { Home, ConnectedHome };
