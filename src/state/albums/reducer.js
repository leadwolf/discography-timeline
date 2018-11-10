import { types } from '.';

const initialState = {
    artistId: '',
    initialized: false,

    transformedItems: [],

    href: '',
    items: [],
    limit: 50,
    next: '',
    offset: 0,
    previous: null,
    total: 0,

    selectedAlbum: {
        loading: false,
        albumId: '',
        data: undefined,
    },
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
            };
        case types.ARTIST_ALBUM_SEARCH_ALL_SUCCESS_RESET:
            return {
                ...state,
                ...action.payload,
            };
        case types.ARTIST_ALBUM_SORT: {
            return { ...state, ...action.payload };
        }
        case types.ARTIST_ALBUM_REVERSE: {
            return { ...state, ...action.payload };
        }
        case types.ARTIST_ALBUM_UNIQUE_FILTER:
            return { ...state, ...action.payload };

        case types.ARTIST_ALBUM_SET_INITIALIZED: {
            return {
                ...state,
                initialized: action.payload.initialized,
            };
        }

        case types.ARTIST_ALBUM_SET_FILTERED_BY_TYPE:
            return {
                ...state,
                filteredItems: action.payload.filteredItems,
            };
        case types.ARTIST_ALBUM__SPECIFIC_SEARCH_SUCCESS:
            return {
                ...state,
                selectedAlbum: {
                    ...state.selectedAlbum,
                    data: action.payload,
                },
            };
        case types.ARTIST_ALBUM_SPECIFIC_SEARCH_SET_LOADING:
            return {
                ...state,
                selectedAlbum: {
                    ...state.selectedAlbum,
                    loading: action.payload,
                },
            };
    }
};

export { reducer };
