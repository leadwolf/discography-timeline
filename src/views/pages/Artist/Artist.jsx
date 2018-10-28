import './artist.scss';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { operations as albumOperations, actions as albumActions } from '../../../state/albums';
import { operations as artistOperations } from '../../../state/artists';
import { AlbumList } from '../../components/Albums/AlbumList';
import { AlbumFilters } from '../../components/Albums/AlbumFilters';

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
            setInitialized,
        } = this.props;

        setInitialized(false);

        searchArtist(id)
            .then(() => searchAlbumsRecursive(true, album_types))
            .then(() => sortAlbums(true))
            .then(filterUniqueAlbums)
            .then(() => setInitialized(true));
    }

    updateFilters = () => {
        const { album_types } = this.state;
        const {
            searchAlbumsRecursive,
            sortAlbums,
            filterUniqueAlbums,
            setInitialized,
        } = this.props;

        setInitialized(false);

        searchAlbumsRecursive(true, album_types)
            .then(() => sortAlbums(true))
            .then(filterUniqueAlbums)
            .then(() => setInitialized(true));
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
            artists: {
                selectedArtist: { name },
            },
            albums,
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
                            handleRemovAlbumType={this.handleRemovAlbumType}
                        />
                        <AlbumList albums={albums} showType={album_types.length > 1} />
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
    searchAlbumsRecursive: (init, albumTypes) =>
        dispatch(albumOperations.searchAll(init, albumTypes)),
    sortAlbums: () => dispatch(albumOperations.sortAlbums()),
    filterUniqueAlbums: () => dispatch(albumOperations.filterUniqueAlbums()),
    setInitialized: initialized => dispatch(albumActions.setInitialized(initialized)),
});

const ConnectedArtist = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Artist)
);

export { ConnectedArtist as Artist };
