import { types } from '.';

const initialState = {
    query: '',

    href: '',
    items: [],
    limit: 20,
    next: '',
    offset: 0,
    previous: null,
    total: 0,

    selectedArtist: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case types.ARTISTS_SEARCH_FAIL:
            return initialState;
        case types.ARTISTS_SEARCH_SUCCESS:
            return { ...state, ...action.payload };
        case types.ARTISTS_SEARCH_ADD:
            return {
                ...state,
                ...action.payload,
                items: [...state.items, ...action.payload.items],
            };
        case types.ARTISTS_SEARCH_SET_QUERY:
            return { ...state, ...action.payload };
        case types.ARTISTS_SEARCH_CLEAR:
            return { ...initialState };
        case types.ARTISTS_SEARCH_SINGLE_SUCCESS:
            return { ...state, selectedArtist: action.payload };
        case types.ARTISTS_SEARCH_SINGLE_FAIL:
            return { ...state, selectedArtist: {} };
    }
};

export { reducer };
