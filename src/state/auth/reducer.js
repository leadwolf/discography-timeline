import { authorizeURL } from './spotify';

const initialState = {
    authorizeURL,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
};

export { reducer };
