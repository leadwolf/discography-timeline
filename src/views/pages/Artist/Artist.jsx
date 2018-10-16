import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

class Artist extends React.Component {
    componentDidMount() {
        const {
            match: {
                params: { id },
            },
        } = this.props;
    }

    render() {
        return <div>todo</div>;
    }
}

Artist.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
};

const ConnectedArtist = withRouter(Artist);

export { ConnectedArtist as Artist };
