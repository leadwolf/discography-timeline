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

    debouncedSearch = debounce(this.props.search, 400, { leading: true });

    handleChange = e => {
        const {
            target: { value },
        } = e;
        const { clearSearch, setQuery } = this.props;

        setQuery(value);
        if (value) {
            this.debouncedSearch(value);
        } else {
            clearSearch();
        }
    };

    render() {
        const {
            artists: { items, total, offset, query },
            loadMore,
        } = this.props;

        const hasMore = items.length + offset < total;

        return (
            <div className="page-home-container">
                <div>
                    <Search value={query} handleChange={this.handleChange} />
                </div>
                <div className="page-home-content-container">
                    {items.length > 0 && (
                        <div className="results-info">
                            <Typography>
                                {`${total} artist${total > 1 ? 's' : ''} found`}
                            </Typography>
                        </div>
                    )}

                    {items.length > 0 && (
                        <ArtistList loadMore={loadMore} hasMore={hasMore} artists={items} />
                    )}
                    {items.length === 0 && (
                        <CenterInfo>
                            <Typography>
                                {query && 'No results were found'}
                                {!query && 'Enter a search term'}
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
    setQuery: query => dispatch(actions.setQuery(query)),
});

const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export { Home, ConnectedHome };
