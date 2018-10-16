import { types } from '.';

const initialState = {
    href: '',
    items: [],
    limit: 20,
    next: '',
    offset: 0,
    previous: null,
    total: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case types.ARTIST_ALBUM_SEARCH_FAIL:
            return { ...initialState };
        case types.ARTIST_ALBUM_SEARCH_SUCCESS:
            return { ...state, ...action.payload };
    }
};

export { reducer };
