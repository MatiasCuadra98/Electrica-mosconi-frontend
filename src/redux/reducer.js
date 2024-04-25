import {
    GET_ALL_USERS,
    GET_USER_BY_ID, 
    FILTER_BY_SOCIAL_MEDIA,
    FILTER_BY_STATE
} from './types';

const initialState = {
    //**--USERS--**//
    //todos los usuarios (+ copia para filtros)
    users: [],
    allUsers: [],
    //usuario por id
    user: {},
      //**--MENSAJES--**//
    //todos los mensajes (+ copia para filtros)
    messages: [],
    allMessages: [],
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