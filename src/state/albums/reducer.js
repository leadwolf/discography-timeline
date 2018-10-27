import { types } from '.';

const initialState = {
    artistId: '',

    href: '',
    items: [],
    limit: 50,
    next: '',
    offset: 0,
    previous: null,
    total: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        // SINGLE SEARCH
        case types.ARTIST_ALBUM_SEARCH_FAIL:
            return { ...initialState };
        case types.ARTIST_ALBUM_SEARCH_SUCCESS:
            return { ...state, ...action.payload };

        // RECURSIVE SEARCH
        case types.ARTIST_ALBUM_SEARCH_ALL_FAIL:
            return { ...state };
        case types.ARTIST_ALBUM_SEARCH_ALL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                items: [...state.items, ...action.payload.items],
                offset: action.payload.offset,
            };
        case types.ARTIST_ALBUM_SORT: {
            return { ...state, ...action.payload };
        }
        case types.ARTIST_ALBUM_REVERSE: {
            return { ...state, ...action.payload };
        }
        case types.ARTIST_ALBUM_UNIQUE_FILTER:
            return { ...state, ...action.payload };
    }
};

export { reducer };
