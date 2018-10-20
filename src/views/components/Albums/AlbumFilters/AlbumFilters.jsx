import React from 'react';
import PropTypes from 'prop-types';

import { AlbumTypeFilter } from '../AlbumTypeFilter';

const AlbumFilters = ({ typeFilter, handleChange, handleRemovAlbumType }) => {
    return (
        <div>
            <AlbumTypeFilter
                filter={typeFilter}
                handleChange={handleChange}
                handleRemove={handleRemovAlbumType}
            />
        </div>
    );
};

AlbumFilters.propTypes = {
    typeFilter: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func,
    handleRemovAlbumType: PropTypes.func,
};

AlbumFilters.defaultProps = {
    typeFilter: [''],
    handleChange: () => undefined,
    handleRemovAlbumType: () => undefined,
};

export { AlbumFilters };
