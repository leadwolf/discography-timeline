import PropTypes from 'prop-types';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { ArtistAvatar, artistItemPropType } from '../ArtistAvatar';

const ArtistList = ({ loadMore, hasMore, artists }) => (
    <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
            <div className="loader" key={0}>
                Loading ...
            </div>
        }
    >
        {artists.map(artist => (
            <ArtistAvatar key={artist.id} artist={artist} />
        ))}
    </InfiniteScroll>
);

ArtistList.propTypes = {
    loadMore: PropTypes.func,
    hasMore: PropTypes.bool,
    artists: PropTypes.arrayOf(artistItemPropType).isRequired,
};

ArtistList.defaultProps = {
    loadMore: () => undefined,
    hasMore: false,
};

export { ArtistList };
