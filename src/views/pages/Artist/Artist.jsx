import './artist.scss';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { operations as albumOperations } from '../../../state/albums';
import { operations as artistOperations } from '../../../state/artists';
import { AlbumList } from '../../components/Albums';
import { AlbumFilters } from '../../components/Albums';

class Artist extends React.Component {
    state = {
        album_types: ['album'],
    };

    componentDidMount() {
        const { album_types } = this.state;
        const {
            match: {
                params: { id },
            },
            searchArtist,
            searchAll,
            sortAlbums,
        } = this.props;

        searchArtist(id)
            .then(() => searchAll(true, album_types))
            .then(() => sortAlbums(true));
    }

    handleFilterChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const {
            artists: {
                selectedArtist: { name },
            },
            albums: { items },
        } = this.props;
        const { album_types } = this.state;

        return (
            <div className="page-artist-container">
                <div className="page-artist-name-container">
                    <Typography variant="h2">{name}</Typography>
                </div>

                <div className="page-artist-albums-container">
                    <div className="page-artist-albums-title-container">
                        <Typography variant="h2">Albums</Typography>
                    </div>
                    <div className="page-artist-albums-content-container">
                        <AlbumFilters
                            typeFilter={album_types}
                            handleChange={this.handleFilterChange}
                        />
                        <AlbumList albums={items} />
                    </div>
                </div>
            </div>
        );
    }
}

Artist.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
};

const mapStateToProps = state => ({ artists: state.artists, albums: state.albums });

const mapDispatchToProps = dispatch => ({
    searchArtist: id => dispatch(artistOperations.getSingleArtist(id)),
    searchArtistAlbums: id => dispatch(albumOperations.search(id)),
    searchAll: (init, albumTypes) => dispatch(albumOperations.searchAll(init, albumTypes)),
    sortAlbums: () => dispatch(albumOperations.sortAlbums()),
});

const ConnectedArtist = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Artist)
);

export { ConnectedArtist as Artist };
