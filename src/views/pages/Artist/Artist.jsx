import './artist.scss';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { operations } from '../../../state/artists';
import { operations as albumOperations } from '../../../state/albums';

class Artist extends React.Component {
    componentDidMount() {
        const {
            match: {
                params: { id },
            },
            searchArtist,
            searchArtistAlbums,
        } = this.props;

        searchArtist(id).then(res => {
            if (!res.isError) searchArtistAlbums(id);
        });
    }

    render() {
        const {
            artists: {
                selectedArtist: { name },
            },
            albums: { items },
        } = this.props;

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
                        {items.map(item => (
                            <Typography key={item.id} variant="h5">
                                {item.name}
                            </Typography>
                        ))}
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
    searchArtist: id => dispatch(operations.getSingleArtist(id)),
    searchArtistAlbums: id => dispatch(albumOperations.search(id)),
});

const ConnectedArtist = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Artist)
);

export { ConnectedArtist as Artist };
