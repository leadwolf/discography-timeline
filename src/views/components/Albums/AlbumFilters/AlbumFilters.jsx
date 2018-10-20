import React from 'react';
import PropTypes from 'prop-types';

import { AlbumTypeFilter } from '../AlbumTypeFilter';

const AlbumFilters = ({ typeFilter, handleChange }) => {
    return (
        <div>
            <AlbumTypeFilter filter={typeFilter} handleChange={handleChange} />
        </div>
    );
};

AlbumFilters.propTypes = {
    typeFilter: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func,
};

AlbumFilters.defaultProps = {
    typeFilter: [''],
    handleChange: () => undefined,
};

export { AlbumFilters };
