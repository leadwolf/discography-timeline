import './artist.scss';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { actions as albumActions, operations as albumOperations } from '../../../state/albums';
import { operations as artistOperations } from '../../../state/artists';
import { AlbumFilters } from '../../components/Albums/AlbumFilters';
import { AlbumList } from '../../components/Albums/AlbumList';
import { ArtistHeader } from '../../components/Artists/ArtistHeader';

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
            searchAlbumsRecursive,
            sortAlbums,
            filterUniqueAlbums,
            setAlbumsInitialized,
        } = this.props;

        setAlbumsInitialized(false);

        searchArtist(id)
            .then(() => searchAlbumsRecursive(true))
            .then(() => sortAlbums(true))
            .then(filterUniqueAlbums)
            .then(() => setAlbumsInitialized(true));
    }

    updateFilters = () => {
        const { album_types } = this.state;
        const {
            searchAlbumsRecursive,
            sortAlbums,
            filterUniqueAlbums,
            setAlbumsInitialized,
        } = this.props;

        setAlbumsInitialized(false);

        searchAlbumsRecursive(true)
            .then(() => sortAlbums(true))
            .then(filterUniqueAlbums)
            .then(() => setAlbumsInitialized(true));
    };

    handleFilterChange = e =>
        this.setState({ [e.target.name]: e.target.value }, this.updateFilters);

    handleRemovAlbumType = type =>
        this.setState(
            ({ album_types }) => ({
                album_types:
                    album_types.length > 1
                        ? album_types.filter(prevType => prevType !== type)
                        : album_types,
            }),
            this.updateFilters
        );

    render() {
        const {
            artists: { selectedArtist, initializedSelectedArtist },
            albums,
        } = this.props;
        const { album_types } = this.state;

        if (!initializedSelectedArtist) {
            return (
                <div className="page-artist-loader-container">
                    <CircularProgress size={50} />
                    <div className="loading-message">Loading...</div>
                </div>
            );
        }

        return (
            <div className="page-artist-container">
                <ArtistHeader artist={selectedArtist} />

                <div className="content-container">
                    <div className="albums-container">
                        <div className="title-container">
                            <Typography variant="h2">Albums</Typography>
                        </div>
                        <div className="content-container">
                            <AlbumFilters
                                typeFilter={album_types}
                                handleChange={this.handleFilterChange}
                                handleRemovAlbumType={this.handleRemovAlbumType}
                            />
                            <AlbumList albums={albums} showType={album_types.length > 1} />
                        </div>
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
    searchAlbumsRecursive: init => dispatch(albumOperations.searchAll(init)),
    sortAlbums: () => dispatch(albumOperations.sortAlbums()),
    filterUniqueAlbums: () => dispatch(albumOperations.filterUniqueAlbums()),
    setAlbumsInitialized: initialized => dispatch(albumActions.setInitialized(initialized)),
});

const ConnectedArtist = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Artist)
);

export { ConnectedArtist as Artist };
