import {
    GET_ALL_USERS,
    GET_USER_BY_ID
} from './types';

const initialState = {
    users: [],
    user: {}
}

const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case GET_ALL_USERS:
        return {
            ...state,
            users: action.payload,
        };
    default:
        return {
            ...state
        };
}

};

export default rootReducer;