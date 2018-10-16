import './artist.scss';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { operations } from '../../../state/artists';

class Artist extends React.Component {
    componentDidMount() {
        const {
            match: {
                params: { id },
            },
            searchArtist,
        } = this.props;

        searchArtist(id);
    }

    render() {
        const {
            artists: {
                selectedArtist: { name },
            },
        } = this.props;

        return (
            <div className="page-artist-container">
                <div className="page-artist-name-container">
                    <Typography variant="h2">{name}</Typography>
                </div>
            </div>
        );
    }
}

Artist.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
};

const mapStateToProps = state => ({ artists: state.artists });

const mapDispatchToProps = dispatch => ({
    searchArtist: id => dispatch(operations.getSingleArtist(id)),
});

const ConnectedArtist = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Artist)
);

export { ConnectedArtist as Artist };
